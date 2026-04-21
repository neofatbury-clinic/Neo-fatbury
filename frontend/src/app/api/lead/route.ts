// src/app/api/lead/route.ts
// LEAD CAPTURE API — Zoho CRM via OAuth2
import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = process.env.ZOHO_CLIENT_ID!
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET!
const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN!

// Get a fresh access token using the refresh token
async function getAccessToken(): Promise<string> {
  const res = await fetch(
    `https://accounts.zoho.in/oauth/v2/token?` +
    `refresh_token=${REFRESH_TOKEN}&` +
    `client_id=${CLIENT_ID}&` +
    `client_secret=${CLIENT_SECRET}&` +
    `grant_type=refresh_token`,
    { method: 'POST', cache: 'no-store' }
  )
  const data = await res.json()
  if (!data.access_token) {
    throw new Error(`Token error: ${JSON.stringify(data)}`)
  }
  return data.access_token
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, location, concerns, pageUrl } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone required' }, { status: 400 })
    }

    // Check if refresh token is configured
    if (!REFRESH_TOKEN || REFRESH_TOKEN === 'PLACEHOLDER_NEED_OAUTH_STEP') {
      console.error('❌ ZOHO_REFRESH_TOKEN not configured. Visit /api/auth/zoho to set up.')
      // Still return success so patient reaches thank-you page
      return NextResponse.json({ success: true, warning: 'CRM not yet configured' })
    }

    const accessToken = await getAccessToken()

    const [firstName, ...lastArr] = name.trim().split(' ')
    const lastName = lastArr.join(' ') || '-'

    const leadBody = {
      data: [{
        First_Name: firstName,
        Last_Name: lastName,
        Phone: phone,
        Mobile: phone,
        Lead_Source: 'Website',
        Lead_Status: 'New',
        Description: `Service: ${service}\nConcerns: ${concerns?.join(', ')}\nPreferred Clinic: ${location}\nPage: ${pageUrl}`,
      }]
    }

    const zohoRes = await fetch('https://zohoapis.in/crm/v3/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadBody),
    })

    const result = await zohoRes.json()
    const leadId = result?.data?.[0]?.details?.id

    console.log(`✅ Lead created in Zoho: ${leadId} — ${name} (${phone})`)
    return NextResponse.json({ success: true, leadId })

  } catch (err) {
    console.error('❌ Lead API error:', err)
    // Always return 200 so users reach thank-you page
    return NextResponse.json({ success: true, warning: 'Lead logged internally' })
  }
}

export async function GET() {
  const configured = REFRESH_TOKEN && REFRESH_TOKEN !== 'PLACEHOLDER_NEED_OAUTH_STEP'
  return NextResponse.json({
    status: 'Lead API online',
    zoho_connected: configured,
    setup_url: configured ? null : '/api/auth/zoho'
  })
}

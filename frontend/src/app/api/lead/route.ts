// src/app/api/lead/route.ts
// LEAD CAPTURE API — Receives form submissions and sends to Zoho CRM
// This runs on Vercel — completely automatic
import { NextRequest, NextResponse } from 'next/server'

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID!
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET!
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN!
const ZOHO_DATACENTER = 'in' // India datacenter
const ZOHO_API_BASE = `https://www.zohoapis.${ZOHO_DATACENTER}`
const ZOHO_ACCOUNTS_BASE = `https://accounts.zoho.${ZOHO_DATACENTER}`

// ── Get fresh access token ────────────────────────────────────
async function getAccessToken(): Promise<string> {
  const res = await fetch(
    `${ZOHO_ACCOUNTS_BASE}/oauth/v2/token?` +
    `refresh_token=${ZOHO_REFRESH_TOKEN}&` +
    `client_id=${ZOHO_CLIENT_ID}&` +
    `client_secret=${ZOHO_CLIENT_SECRET}&` +
    `grant_type=refresh_token`,
    { method: 'POST' }
  )
  const data = await res.json()
  if (!data.access_token) {
    console.error('Zoho token error:', data)
    throw new Error('Failed to get Zoho access token')
  }
  return data.access_token
}

// ── Create Lead in Zoho CRM ───────────────────────────────────
async function createZohoLead(accessToken: string, lead: {
  name: string
  phone: string
  service: string
  location: string
  concerns: string[]
  source: string
  pageUrl: string
}) {
  const [firstName, ...lastParts] = lead.name.trim().split(' ')
  const lastName = lastParts.join(' ') || '-'

  const body = {
    data: [{
      First_Name: firstName,
      Last_Name: lastName,
      Phone: lead.phone,
      Mobile: lead.phone,
      Lead_Source: 'Website',
      Lead_Status: 'New',
      Description: `Service: ${lead.service}\nConcerns: ${lead.concerns.join(', ')}\nPage URL: ${lead.pageUrl}`,
      // Custom fields — these must be created in Zoho CRM settings
      CF_Preferred_Location: lead.location,
      CF_Service_Interest: lead.service,
      CF_Page_Source: lead.pageUrl,
    }],
    trigger: ['approval', 'workflow', 'blueprint'],
  }

  const res = await fetch(`${ZOHO_API_BASE}/crm/v2/Leads`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data
}

// ── POST Handler ──────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, location, concerns, pageUrl } = body

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    // Get Zoho access token
    const accessToken = await getAccessToken()

    // Create lead in Zoho CRM
    const zohoResult = await createZohoLead(accessToken, {
      name,
      phone,
      service: service || 'Not specified',
      location: location || 'Not specified',
      concerns: concerns || [],
      source: 'NeoFatbury Website',
      pageUrl: pageUrl || '',
    })

    console.log('✅ Zoho CRM lead created:', zohoResult?.data?.[0]?.details?.id)

    return NextResponse.json({
      success: true,
      message: 'Lead created successfully',
      leadId: zohoResult?.data?.[0]?.details?.id,
    })

  } catch (error) {
    console.error('❌ Lead API error:', error)
    return NextResponse.json({ error: 'Failed to process lead' }, { status: 500 })
  }
}

// ── GET Health Check ──────────────────────────────────────────
export async function GET() {
  return NextResponse.json({ status: 'Lead API is running ✅' })
}

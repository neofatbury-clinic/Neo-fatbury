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

    // --- EMAIL NOTIFICATION (GMAIL SMTP) ---
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS; // App Password

    if (EMAIL_USER && EMAIL_PASS) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"NeoFatbury Leads" <${EMAIL_USER}>`,
          to: 'fatburyn@gmail.com',
          subject: `New Lead: ${name} (${service})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
              <h2 style="color: #00acb1; border-bottom: 2px solid #00acb1; padding-bottom: 10px;">New Website Lead</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Clinic:</strong> ${location}</p>
              <p><strong>Concerns:</strong> ${concerns?.join(', ') || 'None'}</p>
              <p><strong>Page:</strong> ${pageUrl}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 0.9rem; color: #666;"><em>This lead has also been synced to Zoho CRM.</em></p>
            </div>
          `
        });
        console.log(`📧 Lead email sent via Gmail to fatburyn@gmail.com`);
      } catch (emailErr) {
        console.error('❌ Failed to send lead email via SMTP:', emailErr);
      }
    } else {
      console.warn('⚠️ EMAIL_USER or EMAIL_PASS not found. SMTP notification skipped.');
    }

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

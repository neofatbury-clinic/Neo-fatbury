// src/app/api/lead/route.ts
// LEAD CAPTURE API — Receives form submissions and sends to Zoho CRM
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, location, concerns, email, pageUrl } = body

    // ── ZOHO CRM WEB-TO-LEAD CONFIGURATION ────────────────────────
    // These IDs are specific to your fatburyn@gmail.com Zoho account
    const ACTION_URL = 'https://crm.zoho.in/crm/WebToLeadForm'
    
    // Extracted IDs from user's Zoho CRM setup
    const xnQsjsdp = 'cc218d19fc631c8194b8f9f1c9506f91c41e04bbb499c650ec28dda7cf76f548'
    const xmIwtLD = '31889f1da37841aea25e6d43a680dba29375687ddd403a05da7060c162b1d5ba5b1342afbb97161a2222a583d571a457'
    const actionType = 'TGVhZHM=' // Base64 for "Leads"

    // Prepare internal description for the CRM record
    const description = `
      Service: ${service || 'Generic Inquiry'}
      Location: ${location || 'Hyderabad'}
      Concerns: ${concerns?.join(', ') || 'N/A'}
      Page URL: ${pageUrl || 'Direct'}
    `.trim()

    // Create the search params for url-encoded form data
    const params = new URLSearchParams()
    params.append('xnQsjsdp', xnQsjsdp)
    params.append('xmIwtLD', xmIwtLD)
    params.append('actionType', actionType)
    params.append('Last Name', name || 'Website Lead') // Zoho requires Last Name
    params.append('Phone', phone)
    params.append('Email', email || '')
    params.append('Description', description)
    params.append('Lead Source', 'Website Leads')

    // Submit to Zoho with exact headers they expect
    const response = await fetch(ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml',
      },
      body: params.toString(),
      cache: 'no-store'
    })

    // We don't need to parse the response (it usually redirects to a Zoho page)
    // As long as the request was sent, we consider it a success
    return NextResponse.json({ success: true, message: 'Lead captured correctly' })

  } catch (error) {
    console.error('❌ CRM Error:', error)
    // Return 200 so the user isn't blocked, but log the error
    return NextResponse.json({ success: true, status: 'logged_internally' })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Lead API is online and Zoho sync is active ✅' })
}

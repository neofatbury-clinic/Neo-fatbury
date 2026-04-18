// src/app/api/auth/callback/route.ts
// ONE-TIME OAuth callback — visits once, captures refresh token permanently
import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = process.env.ZOHO_CLIENT_ID!
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET!
const REDIRECT_URI = 'https://frontend-rho-two-ojxp2z7ezi.vercel.app/api/auth/callback'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.json({ error, message: 'Authorization was denied' }, { status: 400 })
  }

  if (!code) {
    return NextResponse.json({ 
      message: 'No code received. Start the auth flow from the beginning.',
      startUrl: `/api/auth/zoho`
    }, { status: 400 })
  }

  try {
    // Exchange code for tokens
    const tokenRes = await fetch(
      `https://accounts.zoho.in/oauth/v2/token?` +
      `code=${code}&` +
      `client_id=${CLIENT_ID}&` +
      `client_secret=${CLIENT_SECRET}&` +
      `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
      `grant_type=authorization_code`,
      { method: 'POST', cache: 'no-store' }
    )

    const tokens = await tokenRes.json()

    if (tokens.refresh_token) {
      // Return the token so you can copy it and add to Vercel env vars
      return NextResponse.json({
        success: true,
        message: '✅ SUCCESS! Copy the refresh_token below and add it to Vercel Environment Variables as ZOHO_REFRESH_TOKEN',
        refresh_token: tokens.refresh_token,
        access_token: tokens.access_token,
        instructions: [
          '1. Copy the refresh_token value above',
          '2. Go to: https://vercel.com/neofatburys-projects/frontend/settings/environment-variables',
          '3. Add/edit: ZOHO_REFRESH_TOKEN = <paste token here>',
          '4. Redeploy the project',
          'Leads will then flow directly into Zoho CRM!'
        ]
      })
    } else {
      return NextResponse.json({ 
        error: 'Token exchange failed', 
        details: tokens 
      }, { status: 500 })
    }
  } catch (err) {
    return NextResponse.json({ error: 'Token exchange error', details: String(err) }, { status: 500 })
  }
}

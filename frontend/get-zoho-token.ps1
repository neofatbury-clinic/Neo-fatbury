# Zoho CRM OAuth Token Generator
# Run: powershell -ExecutionPolicy Bypass -File get-zoho-token.ps1 -ClientSecret "YOUR_SECRET" -GrantCode "YOUR_CODE"

param(
    [Parameter(Mandatory=$true)]
    [string]$ClientSecret,
    
    [Parameter(Mandatory=$true)]
    [string]$GrantCode
)

$ClientId = "1000.SYQ46VM6OMF61JVBBVC5U2ZFT8ZT1T"
$RedirectUri = "https://frontend-rho-two-ojxp2z7ezi.vercel.app/api/auth/callback"

Write-Host "Exchanging code for refresh token..." -ForegroundColor Cyan

$body = "code=$GrantCode&redirect_uri=$RedirectUri&client_id=$ClientId&client_secret=$ClientSecret&grant_type=authorization_code"

try {
    $response = Invoke-RestMethod -Uri "https://accounts.zoho.in/oauth/v2/token" `
        -Method POST `
        -ContentType "application/x-www-form-urlencoded" `
        -Body $body

    if ($response.refresh_token) {
        Write-Host ""
        Write-Host "SUCCESS! Here are your tokens:" -ForegroundColor Green
        Write-Host "ZOHO_REFRESH_TOKEN=$($response.refresh_token)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Now updating your .env.local..." -ForegroundColor Cyan
        
        # Read existing .env.local
        $envPath = ".env.local"
        $envContent = Get-Content $envPath -Raw
        
        # Replace the placeholder
        $envContent = $envContent -replace "ZOHO_REFRESH_TOKEN=.*", "ZOHO_REFRESH_TOKEN=$($response.refresh_token)"
        $envContent = $envContent -replace "ZOHO_CLIENT_ID=.*", "ZOHO_CLIENT_ID=$ClientId"
        $envContent = $envContent -replace "ZOHO_CLIENT_SECRET=.*", "ZOHO_CLIENT_SECRET=$ClientSecret"
        
        Set-Content $envPath $envContent
        Write-Host ".env.local updated successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next step: Run the deployment to push these changes to Vercel." -ForegroundColor Cyan
    } else {
        Write-Host "Error response:" -ForegroundColor Red
        $response | ConvertTo-Json
    }
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
}

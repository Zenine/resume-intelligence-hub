#!/usr/bin/env node
// Submit sitemap.xml to Google Search Console via the Webmasters API.
// Uses a service account JWT for auth (see .github/SETUP_GSC_AUTOMATION.md).
// Designed for CI; skips gracefully if GSC_SERVICE_ACCOUNT env var is absent.

import { createSign } from 'crypto'
import { readFileSync, existsSync } from 'fs'

const SITE_URL = 'https://zenine.github.io/resume-intelligence-hub/'
const SITEMAP_PATH = 'sitemap.xml'

function loadServiceAccount() {
  if (process.env.GSC_SERVICE_ACCOUNT) {
    try {
      return JSON.parse(process.env.GSC_SERVICE_ACCOUNT)
    } catch (e) {
      console.error('GSC_SERVICE_ACCOUNT env var is set but not valid JSON.')
      process.exit(1)
    }
  }
  const localPath = process.env.GSC_SERVICE_ACCOUNT_FILE
    || `${process.env.HOME}/.config/resume-intelligence-hub/gsc-service-account.json`
  if (existsSync(localPath)) {
    return JSON.parse(readFileSync(localPath, 'utf8'))
  }
  console.warn('[skip] no GSC_SERVICE_ACCOUNT env var or local key file; see .github/SETUP_GSC_AUTOMATION.md')
  process.exit(0)
}

async function getAccessToken(svc) {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url')
  const now = Math.floor(Date.now() / 1000)
  const payload = Buffer.from(JSON.stringify({
    iss: svc.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  })).toString('base64url')
  const sig = createSign('RSA-SHA256').update(`${header}.${payload}`).sign(svc.private_key, 'base64url')
  const jwt = `${header}.${payload}.${sig}`

  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  const j = await r.json()
  if (!j.access_token) {
    console.error('Token exchange failed:', j)
    process.exit(1)
  }
  return j.access_token
}

async function submitSitemap(token) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(SITEMAP_PATH)}`
  const r = await fetch(url, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  })
  console.log(`PUT ${url} → ${r.status} ${r.statusText}`)
  if (!r.ok) {
    const body = await r.text()
    console.error(body)
    process.exit(1)
  }
  console.log('Sitemap submitted / refreshed successfully.')
}

const svc = loadServiceAccount()
const token = await getAccessToken(svc)
await submitSitemap(token)

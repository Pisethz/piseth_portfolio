import '@tanstack/react-start/server-only'
import type { ProfileData, Project } from '@/lib/types'

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || ''
const API_TOKEN = process.env.API_TOKEN || ''

function isConfigured(): boolean {
  return !!APPS_SCRIPT_URL
}

async function callAppsScript(action: string, payload?: unknown): Promise<unknown> {
  // Build form body with all params
  const formBody = new URLSearchParams()
  formBody.set('action', action)
  if (API_TOKEN) formBody.set('token', API_TOKEN)
  if (payload !== undefined) {
    formBody.set('payload', JSON.stringify(payload))
  }

  // POST with redirect: 'manual' to intercept the 302 redirect
  const firstRes = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    redirect: 'manual',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody.toString(),
  })

  let finalRes: Response

  if (firstRes.status >= 300 && firstRes.status < 400) {
    const redirectUrl = firstRes.headers.get('location')
    if (!redirectUrl) throw new Error('Apps Script redirect with no Location header')
    // GET the redirect URL — POST body was encoded into user_content_key
    finalRes = await fetch(redirectUrl)
  } else {
    finalRes = firstRes
  }

  if (!finalRes.ok) {
    throw new Error(`Apps Script API error: ${finalRes.status} ${finalRes.statusText}`)
  }

  const text = await finalRes.text()
  try {
    const parsed = JSON.parse(text)
    if (parsed.error) throw new Error(`Apps Script error: ${parsed.error}`)
    return parsed.data
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new Error(`Apps Script error: Unexpected end of JSON input`)
    }
    throw e
  }
}

// ─── Profile ────────────────────────────────────────────────

export async function getProfileData(): Promise<ProfileData | null> {
  if (!isConfigured()) return null
  try {
    const data = await callAppsScript('getProfile')
    return data as ProfileData
  } catch {
    return null
  }
}

export async function updateProfileData(data: Partial<ProfileData>): Promise<void> {
  if (!isConfigured()) {
    console.warn('APPS_SCRIPT_URL not set — profile changes won\'t persist after reload')
    return
  }
  await callAppsScript('updateProfile', data)
}

// ─── Projects ───────────────────────────────────────────────

export async function getProjectsData(): Promise<Project[]> {
  if (!isConfigured()) return []
  try {
    const data = await callAppsScript('getProjects')
    return (data || []) as Project[]
  } catch {
    return []
  }
}

export async function saveProjectsData(projects: Project[]): Promise<void> {
  if (!isConfigured()) {
    console.warn('APPS_SCRIPT_URL not set — project changes won\'t persist after reload')
    return
  }
  await callAppsScript('saveProjects', projects)
}

// ─── Admin ──────────────────────────────────────────────────

export async function getAdminPasswordHash(): Promise<string | null> {
  if (!isConfigured()) return null
  try {
    const data = await callAppsScript('getAdminHash')
    return (data as string) || null
  } catch {
    return null
  }
}

export async function setAdminPasswordHash(hash: string): Promise<void> {
  if (!isConfigured()) {
    console.warn('APPS_SCRIPT_URL not set — admin password won\'t persist after reload')
    return
  }
  await callAppsScript('setAdminHash', hash)
}

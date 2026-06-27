import { createServerFn } from '@tanstack/react-start'
import type { ProfileData, Project } from '@/lib/types'
import {
  getStoredProfile, setStoredProfile,
  getStoredProjects, setStoredProjects,
  getStoredAdminHash, setStoredAdminHash,
} from '@/lib/file-store'

// ─── Profile ────────────────────────────────────────────────

export const getProfile = createServerFn({ method: 'GET' }).handler(async () => {
  return getStoredProfile()
})

export const updateProfile = createServerFn({ method: 'POST' })
  .validator((d: Partial<ProfileData>) => d)
  .handler(async ({ data }) => {
    setStoredProfile(data)
    return { success: true }
  })

// ─── Projects ───────────────────────────────────────────────

export const getProjects = createServerFn({ method: 'GET' }).handler(async () => {
  return getStoredProjects()
})

export const addProject = createServerFn({ method: 'POST' })
  .validator((d: Omit<Project, 'id' | 'createdAt'>) => d)
  .handler(async ({ data }) => {
    const projects = getStoredProjects()
    const newProject: Project = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    projects.unshift(newProject)
    setStoredProjects(projects)
    return newProject
  })

export const updateProject = createServerFn({ method: 'POST' })
  .validator((d: { id: string; updates: Partial<Omit<Project, 'id' | 'createdAt'>> }) => d)
  .handler(async ({ data }) => {
    const projects = getStoredProjects()
    const updated = projects.map((p) =>
      p.id === data.id ? { ...p, ...data.updates } : p,
    )
    setStoredProjects(updated)
    return { success: true }
  })

export const deleteProject = createServerFn({ method: 'POST' })
  .validator((d: string) => d)
  .handler(async ({ data }) => {
    const projects = getStoredProjects()
    setStoredProjects(projects.filter((p) => p.id !== data))
    return { success: true }
  })

// ─── Admin ──────────────────────────────────────────────────

export const getAdminHash = createServerFn({ method: 'GET' }).handler(async () => {
  return getStoredAdminHash()
})

export const setAdminHash = createServerFn({ method: 'POST' })
  .validator((d: string) => d)
  .handler(async ({ data }) => {
    setStoredAdminHash(data)
    return { success: true }
  })

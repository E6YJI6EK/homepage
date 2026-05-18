import { useState } from "react"
import type { QuickLink } from "@/types"
import { DEFAULT_QUICK_LINKS } from "@/lib/defaultQuickLinks"

const STORAGE_KEY = "quick-links"

function readLinks(): QuickLink[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored) as QuickLink[]
    }
  } catch {
    // ignore malformed data
  }
  return DEFAULT_QUICK_LINKS
}

function persist(links: QuickLink[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links))
}

export function useQuickLinks() {
  const [links, setLinks] = useState<QuickLink[]>(readLinks)

  function addLink(link: Omit<QuickLink, "id">) {
    const next = [...links, { ...link, id: crypto.randomUUID() }]
    persist(next)
    setLinks(next)
  }

  function removeLink(id: string) {
    const next = links.filter((l) => l.id !== id)
    persist(next)
    setLinks(next)
  }

  function updateLink(id: string, patch: Partial<Omit<QuickLink, "id">>) {
    const next = links.map((l) => (l.id === id ? { ...l, ...patch } : l))
    persist(next)
    setLinks(next)
  }

  return { links, addLink, removeLink, updateLink }
}

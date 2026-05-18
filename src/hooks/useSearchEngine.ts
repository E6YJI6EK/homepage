import { useState } from "react"
import type { SearchEngineKey } from "@/types"
import { SEARCH_ENGINES } from "@/lib/searchEngines"

const STORAGE_KEY = "search-engine"
const VALID_KEYS = new Set(SEARCH_ENGINES.map((e) => e.key))

function readEngine(): SearchEngineKey {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && VALID_KEYS.has(stored as SearchEngineKey)) {
    return stored as SearchEngineKey
  }
  return "google"
}

export function useSearchEngine(): [SearchEngineKey, (key: SearchEngineKey) => void] {
  const [engine, setEngineState] = useState<SearchEngineKey>(readEngine)

  function setEngine(key: SearchEngineKey) {
    localStorage.setItem(STORAGE_KEY, key)
    setEngineState(key)
  }

  return [engine, setEngine]
}

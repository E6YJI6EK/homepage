import { SEARCH_ENGINES } from "./consts"
import type { SearchEngineKey } from "./types"
import { observable } from "mobx"

const STORAGE_KEY = "search-engine"
const VALID_KEYS = new Set(SEARCH_ENGINES.map((e) => e.key))

function readEngine(): SearchEngineKey {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && VALID_KEYS.has(stored as SearchEngineKey)) {
    return stored as SearchEngineKey
  }
  return "google"
}

export const SearchEngineSelectorModel = () => observable({
  engine: readEngine(),
  setEngine(key: SearchEngineKey) {
    localStorage.setItem(STORAGE_KEY, key)
    this.engine = key
  },
})

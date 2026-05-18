export type SearchEngineKey = "google" | "yandex" | "perplexity" | "deepseek" | "chatgpt"

export interface SearchEngine {
  key: SearchEngineKey
  label: string
  url: string
  openInSelf?: boolean
}

export interface QuickLink {
  id: string
  label: string
  url: string
  icon?: string
}

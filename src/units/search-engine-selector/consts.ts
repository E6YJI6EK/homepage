import type { SearchEngine } from "./types";

export const SEARCH_ENGINES: SearchEngine[] = [
  { key: "google",     label: "Google",     url: "https://www.google.com/search?q=" },
  { key: "yandex",     label: "Yandex",     url: "https://yandex.ru/search/?text=" },
  { key: "perplexity", label: "Perplexity", url: "https://www.perplexity.ai/search?q=" },
  { key: "deepseek",   label: "DeepSeek",   url: "https://chat.deepseek.com/search?q=", openInSelf: true },
  { key: "chatgpt",    label: "ChatGPT",    url: "https://chatgpt.com/?q=",             openInSelf: true },
]
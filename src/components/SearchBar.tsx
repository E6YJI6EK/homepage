import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearchEngine } from "@/hooks/useSearchEngine"
import { SEARCH_ENGINES } from "@/lib/searchEngines"
import type { SearchEngineKey } from "@/types"
import { useRef, useState } from "react"
import { Button } from "./ui/button"

export function SearchBar() {
  const [engineKey, setEngineKey] = useSearchEngine()
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    const engine = SEARCH_ENGINES.find((e) => e.key === engineKey)!
    const url = engine.url + encodeURIComponent(query)
    if (engine.openInSelf) {
      window.open(url, "_self")
    } else {
      window.location.href = url
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <Select
        value={engineKey}
        onValueChange={(v) => setEngineKey(v as SearchEngineKey)}
      >
        <SelectTrigger className="w-35 shrink-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SEARCH_ENGINES.map((e) => (
            <SelectItem key={e.key} value={e.key}>
              {e.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        autoFocus={true}
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1"
      />
      <Button type="submit" variant="outline">
        Search
      </Button>
    </form>
  )
}

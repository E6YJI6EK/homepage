import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SEARCH_ENGINES } from "@/lib/searchEngines"
import type { SearchEngineKey } from "@/types"

interface SearchBarProps {
  engineKey: SearchEngineKey
  onEngineChange: (key: SearchEngineKey) => void
}

export function SearchBar({ engineKey, onEngineChange }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

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
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-2xl">
      <Select value={engineKey} onValueChange={(v) => onEngineChange(v as SearchEngineKey)}>
        <SelectTrigger className="w-[140px] shrink-0">
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
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1"
      />
    </form>
  )
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SEARCH_ENGINES } from "./consts"
import type { SearchEngineKey } from "./types"

type SearchEngineSelectorProps = {
  engineKey: SearchEngineKey
  setEngineKey: (key: SearchEngineKey) => void
}

export const SearchEngineSelector = (props: SearchEngineSelectorProps) => {
  const { engineKey, setEngineKey } = props
  return (
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
  )
}

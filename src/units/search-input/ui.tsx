import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type SearchInputProps = {
  query: string
  setQuery: (query: string) => void
}

export const SearchInput = (props: SearchInputProps) => {
  const { query, setQuery } = props
  return (
    <>
      <Input
        autoFocus={true}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1"
      />
      <Button type="submit" variant="outline">
        Search
      </Button>
    </>
  )
}

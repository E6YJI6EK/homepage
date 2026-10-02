import { SEARCH_ENGINES, SearchEngineSelectorModel } from "@/units/search-engine-selector"
import { SearchInputModel } from "@/units/search-input"
import { observable } from "mobx"

export const SearchBarModel = () =>
  observable({
    searchEngineModel: SearchEngineSelectorModel(),
    searchInputModel: SearchInputModel(),
    handleSubmit(e: React.FormEvent) {
      const query = this.searchInputModel.query.trim()
      const engineKey = this.searchEngineModel.engine
      e.preventDefault()
      if (!query) return
      const engine = SEARCH_ENGINES.find((e) => e.key === engineKey)!
      const url = engine.url + encodeURIComponent(query)
      if (engine.openInSelf) {
        window.open(url, "_self")
      } else {
        window.location.href = url
      }
    },
  })

export const searchBarModel = SearchBarModel()

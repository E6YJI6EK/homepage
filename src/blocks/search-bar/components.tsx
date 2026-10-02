import { SearchEngineSelector } from "@/units/search-engine-selector"
import { SearchInput } from "@/units/search-input"
import { observer } from "mobx-react-lite"
import { searchBarModel as model } from "./model"

export const SearchEngineSelectorReflected = observer(() => {
  return (
    <SearchEngineSelector
      engineKey={model.searchEngineModel.engine}
      setEngineKey={model.searchEngineModel.setEngine}
    />
  )
})

export const SearchInputReflected = observer(() => {
  return (
    <SearchInput
      query={model.searchInputModel.query}
      setQuery={model.searchInputModel.setQuery}
    />
  )
})

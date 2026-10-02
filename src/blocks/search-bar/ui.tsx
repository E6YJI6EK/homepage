import {
  SearchEngineSelectorReflected,
  SearchInputReflected,
} from "./components"
import { searchBarModel as model } from "./model"
import { observer } from "mobx-react-lite"

export const SearchBar = observer(() => {
  return (
    <form onSubmit={model.handleSubmit} className="flex w-full max-w-2xl gap-2">
      <SearchEngineSelectorReflected />
      <SearchInputReflected />
    </form>
  )
})

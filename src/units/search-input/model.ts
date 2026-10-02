import { observable } from "mobx";

export const SearchInputModel = () => observable({
  query: "",
  setQuery(q: string) {
    this.query = q;
  }
});

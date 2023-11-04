import { inventory } from "./carModels.js"

export const searchModel = () => {
  const searchInput = document.getElementById("search-input").value
  const searchResult = document.getElementById("search-result")
  const searchBtn = document.getElementById("search-btn")

  const search = () => {
    const brandSearch = inventory.find((item) => item.marca === searchInput)
    searchResult.innerHTML = `holaaaaaaa ${brandSearch.marca}`
  }
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if (searchInput) {
      search()
      return
    }
  })
}

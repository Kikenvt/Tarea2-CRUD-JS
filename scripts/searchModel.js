import { inventory } from "./carModels.js"

export const searchModel = () => {
  const searchInput = document.getElementById("search-input")
  const searchResult = document.getElementById("search-result")
  const searchBtn = document.getElementById("search-btn")

  const search = () => {
    // Añadido .toLocalCase() para que se busque independiente de mayusculas o minusculas

    const modelSearch = inventory.find((item) => item.modelo.toLowerCase() === searchInput.value.toLowerCase())
    searchResult.innerText = `${modelSearch.marca} ${modelSearch.modelo} Cantidad: ${modelSearch.cantidad}`
  }
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if (searchInput.value) {
      search()
      searchInput.value = ""
      
      
    } else{
        searchResult.innerHTML = `Modelo no encontrado`
    }
    
  })
}

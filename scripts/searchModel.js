import { inventory } from "./carModels.js"
import { listModels } from "./listModels.js"
import { totalInventory } from "./totalInventory.js"

export const searchModel = () => {
  const searchInput = document.getElementById("search-input")
  const searchResult = document.getElementById("search-result")
  const searchBtn = document.getElementById("search-btn")
  const clearTable = document.getElementById("clear-table")

  const search = () => {
    // Añadido .toLocalCase() para que se busque independiente de mayusculas o minusculas

    const modelSearch = inventory.filter(item => item.modelo.toLowerCase() === searchInput.value.toLowerCase())

    if (modelSearch.length > 0) {
      modelSearch.forEach((car) => {
        const row = clearTable.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        const cell5 = row.insertCell(4)

        cell1.innerText = car.marca
        cell2.innerText = car.modelo
        cell3.innerText = car.cantidad
        cell4.innerText = car.precio + " €"

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "BORRAR"
        deleteButton.classList = "deleteBtn"
        deleteButton.addEventListener("click", () => {

          const index = modelSearch.findIndex((model) => model.id === car.id)
          if (index !== -1) {
            modelSearch.splice(index, 1)
            
          }

          clearTable.innerHTML = ""
          search()
        })
        cell5.appendChild(deleteButton)
      })
    }
    searchResult.innerText = `${modelSearch.marca} ${modelSearch.modelo} Cantidad: ${modelSearch.cantidad}`
  }

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault()
    clearTable.innerHTML = ""

    if (searchInput.value) {
      search()

      searchInput.value = ""
    } else {
      searchResult.innerHTML = `Modelo no encontrado`
    }
  })
}

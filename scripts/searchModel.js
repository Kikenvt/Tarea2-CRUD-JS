import { inventory } from "./carModels.js"
import { deleteModel } from "./deleteModel.js"
import { listModels } from "./listModels.js"
import { editModel } from "./editModel.js"
import { totalInventory } from "./totalInventory.js"

export const searchModel = () => {
  const searchInput = document.getElementById("search-input")
  const searchResult = document.getElementById("search-result")
  const searchBtn = document.getElementById("search-btn")
  const clearTable = document.getElementById("clear-table")

  const search = () => {
    // Añadido .toLocalCase() para que se busque independiente de mayusculas o minusculas

    const modelSearch = inventory.filter((item) => item.modelo.toLowerCase() === searchInput.value.toLowerCase())

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
          deleteModel(car)
          search()
        })
        cell5.appendChild(deleteButton)
        const editButton = document.createElement("button")
        editButton.innerText = "EDITAR"
        editButton.classList = "editBtn"
        editButton.addEventListener("click", () => {
          editModel(car)
          
        })

        cell5.appendChild(editButton)
      })

        totalInventory(modelSearch)

      } else if (modelSearch.length === 0) {

        searchResult.innerHTML = `Modelo no encontrado`
        listModels()

      }
  }

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault()
    clearTable.innerHTML = ""
    search()
  })
}

const resetSearchButton = document.getElementById("reset-search-btn")
resetSearchButton.addEventListener("click", () => {
  const clearTable = document.getElementById("clear-table")
  const searchResult = document.getElementById("search-result")
  const searchInput = document.getElementById("search-input")

  searchInput.value = ""
  clearTable.innerHTML = ""
  searchResult.innerHTML = ""
  listModels()
})

import { inventory } from "./carModels.js"
import { deleteModel } from "./deleteModel.js"
import { editModel } from "./editModel.js"
import { totalInventory } from "./totalInventory.js"

export const listModels = () => {
  const clearTable = document.getElementById("clear-table")

  inventory.forEach((item) => {
    const row = clearTable.insertRow()

    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const cell5 = row.insertCell(4)

    cell1.innerText = item.marca
    cell2.innerText = item.modelo
    cell3.innerText = item.cantidad
    cell4.innerText = item.precio + " €"

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "BORRAR"
    deleteButton.classList = "deleteBtn"
    deleteButton.addEventListener("click", () => {
      
      
      deleteModel(item)
    })
    cell5.appendChild(deleteButton)

    const editButton = document.createElement("button")
    editButton.innerText = "EDITAR"
    editButton.classList = "editBtn"
    editButton.addEventListener("click", () => {
      editModel(item)
    })

    cell5.appendChild(editButton)
  })
  // Agregamos aqui la funcion de mostrar total Inventario para que cada vez que editemos, borremos o añadamos un modelos se actualize
  totalInventory()
}

import { inventory } from "./carModels.js"
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
      const clearTable = document.getElementById("clear-table")

      const index = inventory.findIndex((model) => model.id === item.id)

      if (index !== -1) {
        inventory.splice(index, 1)
      }

      clearTable.innerHTML = ""
      listModels()
    })
    cell5.appendChild(deleteButton)

    const editButton = document.createElement("button")
    editButton.innerText = "EDITAR"
    editButton.classList = "editBtn"
    editButton.addEventListener("click", () => {
      const windowBackground = document.getElementById("edit-modal-events")
      windowBackground.style.display = "block"
      const closeWindow = () => {windowBackground.style.display = "none"}
      window.addEventListener("click", (e) => e.target == windowBackground && closeWindow())

      const index = inventory.findIndex(product => product.id === item.id)
      // Rellenamos el formularion con los valores del modelo actual que escogimos de la tabla
      const newBrand = document.getElementById("edit-brand")
      const newModel = document.getElementById("edit-name")
      const newQuantity = document.getElementById("edit-quantity")
      const newPrice = document.getElementById("edit-price")

      // Aqui podemos modificarlso para que después los recoja 
      newBrand.value = item.marca
      newModel.value = item.modelo
      newQuantity.value = item.cantidad
      newPrice.value = item.precio

      /////

      if (index !== -1){
        const editForm = document.getElementById("editForm")

        const confirmEdit = function (event){
          event.preventDefault()
          // Actualizamos los valores del ELEMENTO que vamos a modificar

          inventory[index].marca = newBrand.value
          inventory[index].modelo = newModel.value
          inventory[index].cantidad = newQuantity.value
          inventory[index].precio = newPrice.value


          const clearTable = document.getElementById("clear-table");
          clearTable.innerHTML = "";
         // Quitamos el Eventlistener para que no de errores ya que al ser una ventana modal se va acumulando
         windowBackground.style.display = "none"
         editForm.removeEventListener("submit", confirmEdit);
          
          listModels()


        }
        editForm.addEventListener("submit", confirmEdit)
      }

    })

    cell5.appendChild(editButton)
  })
  // Agregamos aqui la funcion de mostrar total Inventario para que cada vez que editemos, borremos o añadamos un modelos se actualize
  totalInventory()
}

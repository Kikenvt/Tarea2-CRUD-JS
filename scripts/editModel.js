import { inventory } from "./carModels.js"
import { listModels } from "./listModels.js"

export const editModel = (item) => {
  const windowBackground = document.getElementById("edit-modal-events")
  windowBackground.style.display = "block"
  const closeWindow = () => {
    windowBackground.style.display = "none"
  }
  window.addEventListener("click", (e) => e.target == windowBackground && closeWindow())

  const index = inventory.findIndex((product) => product.id === item.id)
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

  if (index !== -1) {
    const editForm = document.getElementById("editForm")

    const confirmEdit = function (event) {
      event.preventDefault()
      // Actualizamos los valores del ELEMENTO que vamos a modificar

      inventory[index].marca = newBrand.value
      inventory[index].modelo = newModel.value
      inventory[index].cantidad = newQuantity.value
      inventory[index].precio = newPrice.value

      const clearTable = document.getElementById("clear-table")
      clearTable.innerHTML = ""
      // Quitamos el Eventlistener para que no de errores ya que al ser una ventana modal se va acumulando
      windowBackground.style.display = "none"
      editForm.removeEventListener("submit", confirmEdit)

      listModels()
    }
    editForm.addEventListener("submit", confirmEdit)
  }
}

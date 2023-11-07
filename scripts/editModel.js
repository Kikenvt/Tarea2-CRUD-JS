import { inventory } from "./carModels.js"
import { listModels } from "./listModels.js"

export const editModel = (item) => {

  //Enlazamos la ventana modal, y cambiamos el estilo para que se muestre
  const windowBackground = document.getElementById("edit-modal-events")
  windowBackground.style.display = "block"
  const closeWindow = () => {
    windowBackground.style.display = "none"
  }
  // Con este EventListener cuando se haga click fuera de la ventana modal se cerrará
  window.addEventListener("click", (e) => e.target == windowBackground && closeWindow() && editForm.removeEventListener("submit", confirmEdit()))

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
    
    const confirmEdit = (event)=> {
      event.preventDefault()
      // Actualizamos los valores del ELEMENTO que vamos a modificar
      inventory[index].marca = newBrand.value
      inventory[index].modelo = newModel.value
      inventory[index].cantidad = newQuantity.value
      inventory[index].precio = newPrice.value

      const clearTable = document.getElementById("clear-table")
      clearTable.innerHTML = ""
      //Cambiamos el estilo de la ventana modal para que se oculte
      closeWindow()
      // Quitamos el Eventlistener para que no de errores ya que al ser una ventana modal se va acumulando
      editForm.removeEventListener("submit", confirmEdit)

      listModels()
    }
    editForm.addEventListener("submit", confirmEdit)
  }
  
    
}

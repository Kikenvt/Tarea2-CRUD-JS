export const totalInventory = (array) => {
  const totalTemplate = document.getElementById("total-template")

  let totalPrice = 0

  array.forEach((item) => {
    totalPrice += (item.cantidad * item.precio)
  })
  totalTemplate.innerHTML = `Coste total: ${totalPrice} €`
}

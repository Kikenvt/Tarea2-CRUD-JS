import { inventory } from "./carModels.js"
import { listModels } from "./listModels.js"


export const deleteModel = (item) => {
  const clearTable = document.getElementById("clear-table")

  const index = inventory.findIndex((product) => product.id === item.id)

  if (index !== -1) {
    inventory.splice(index, 1)
  }

  clearTable.innerHTML = ""
  listModels()
}



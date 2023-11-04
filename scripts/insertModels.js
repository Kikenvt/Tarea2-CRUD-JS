import { inventory } from "./carModels.js";
import { listModels } from "./listModels.js";

export const insertModels = () =>{
    const modelForm = document.getElementById("model-form-events")
    modelForm.addEventListener("submit", (event) =>{

        event.preventDefault()

        const modelBrand = document.getElementById("model-brand").value
        const modelName = document.getElementById("model-name").value
        const modelQuantity =  parseInt(document.getElementById("model-quantity").value)
        const modelPrice = parseInt(document.getElementById("model-price").value)

        if (modelBrand && modelName && !isNaN(modelQuantity) && !isNaN(modelPrice)){
            const newCar = {
                id: inventory.length + 1,
                marca: modelBrand,
                modelo: modelName,
                cantidad: modelQuantity,
                precio: modelPrice, 
            }

            inventory.push(newCar)

            const clearTable = document.getElementById("clear-table")
            clearTable.innerHTML = ""

            modelForm.reset()

            listModels()
        }
    })
}
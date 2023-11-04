import { inventory } from "./carModels.js";

export const totalInventory = ()=>{
    const totalTemplate = document.getElementById("total-template") 

    let totalPrice = 0

    inventory.forEach((item)=>{
    
    totalPrice += (item.cantidad * item.precio)
})

    totalTemplate.innerHTML = `${totalPrice}`
}
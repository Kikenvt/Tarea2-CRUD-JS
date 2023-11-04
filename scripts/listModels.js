import { inventory } from "./carModels.js";

export const listModels = () =>{
    const clearTable = document.getElementById("clear-table")

    inventory.forEach(item =>{
        const row = clearTable.insertRow()

        const cell1 = row.insertCell(0)        
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3) 
        const cell5 = row.insertCell(4)

        cell1.innerText = item.marca
        cell2.innerText = item.modelo
        cell3.innerText = item.cantidad
        cell4.innerText = item.precio + ' €'

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR";
        deleteButton.classList = "deleteBtn"
        deleteButton.addEventListener("click", () =>{
            const clearTable = document.getElementById("clear-table")

            if (confirm(`¿Estas seguro de que deseas borrar "${item.marca} ${item.modelo}"?`)){
                const index = inventory.findIndex(model => model.id === item.id)

                if(index !== -1){
                    inventory.splice(index, 1)
                }
            }
            clearTable.innerHTML = ""
            listModels()
        })
        cell5.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR";
        editButton.classList = "editBtn"

        cell5.appendChild(editButton);

    })
}
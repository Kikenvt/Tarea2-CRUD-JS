/**
 * **Autor** : Enrique Fernández - Campoamor Fernández
 * **GitHub** : 
 */


import { listModels } from "./listModels.js";
import { insertModels } from "./insertModels.js";

document.addEventListener("DOMContentLoaded", listModels)

document.addEventListener("DOMContentLoaded", () =>{

    const btnForm = document.getElementById("model-form-events")

    btnForm.addEventListener("click", ()=> {
        insertModels()
    })

})
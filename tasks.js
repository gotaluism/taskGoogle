
let contAgg=0



// function inicio(){
//     agregarr=document.getElementById("agregarTarea")
//     agregarr.addEventListener("click",cargarTarea)

// }


function cargarTarea(){
    agregar=document.getElementById("agregarTarea")
    agregar.addEventListener("click",agregarT)

    eliminar=document.getElementById("eliminarTarea")
    eliminar.addEventListener("click",eliminarT)

}


function agregarT(){
    agg=document.createElement("input")
    
    agg.setAttribute("id","id"+contAgg)

    bolita=document.createElement("input")
    bolita.setAttribute("type", "radio")
    bolita.setAttribute("id","idb"+contAgg)

    espacio= document.createElement("br")
    espacio.setAttribute("id","ide"+contAgg)

    task=document.getElementById("tasks")
    contAgg++
    task.prepend(bolita,agg)

    
    task.prepend(espacio);

    
}

function eliminarT(){
    task=document.getElementById("tasks")
    let contarSelecionados=0
    for (let i=0;i<=contAgg;i++){
        eliminarInput=document.getElementById("id"+i)
        if (eliminarInput!=null){
            eliminarBolita=document.getElementById("idb"+i)
            espacio=document.getElementById("ide"+i)
                if(eliminarBolita.checked==true){
                    task.removeChild(eliminarInput)
                    task.removeChild(eliminarBolita)
                    task.removeChild(espacio)
                    contarSelecionados++;
                }
        }
    }

    if(contarSelecionados==0){
        let resultado=window.confirm("Esta seguro que desea eliminar todos los tasks?")
        if (resultado==true){
            task.innerHTML=""
        }
        
    }
    // eliminarInput=document.getElementById("id"+1)
    // eliminarBolita=document.getElementById("idb"+1)
    // espacio=document.getElementById("ide"+1)
    // task.removeChild(eliminarInput)
    // task.removeChild(eliminarBolita)
    // task.removeChild(espacio)
}


window.addEventListener("load",cargarTarea)
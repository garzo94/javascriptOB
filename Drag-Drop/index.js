const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const trash = document.getElementById('img')

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
       
        
    })

    parrafo.addEventListener("dragend", () => {
       
        parrafo.classList.remove("dragging")
    })
})

trash.addEventListener("dragover", e =>{
    e.preventDefault()
    
})

trash.addEventListener("drop", e =>{
    const id_parrafo = e.dataTransfer.getData('id')
    const parrafo = document.getElementById(id_parrafo)
    parrafo.classList.add('hide')

})

// secciones.forEach(seccion => {
//     seccion.addEventListener("dragover", event => {
//         event.preventDefault()
//         event.dataTransfer.dropEffect = "copy" // copy por defecto
//         // console.log("Drag Over")
//         //
//     })

//     seccion.addEventListener("drop", event => {
//         console.log("Drop")
//         const id_parrafo = event.dataTransfer.getData("id")
//         // console.log("Párrafo id: ", id_parrafo)
//         const parrafo = document.getElementById(id_parrafo)
//         seccion.appendChild(parrafo)
//     })

    
// })
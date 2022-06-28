const name = 'Alex'
const apellido = 'Garzo'
const object = {
    name,
    apellido
}

localStorage.setItem("Object", JSON.stringify(object))
sessionStorage.setItem("Object",JSON.stringify(object))
let time = now.getTime()
document.cookie = "objectName=", JSON.stringify(object)" ;expires=" + new Date(Date.now()+120*1000).toUTCString()
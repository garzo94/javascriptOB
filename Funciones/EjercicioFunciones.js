// Funcion sin parametros que retorne true
function noParams(){
    return true
}

// Funcion asincrona

const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Hola soy una promesa')
    }, 300)
})

miPromesa
   .then((res)=>console.log(res))

// Funcion generadora
function* generatePares(){
    const listIndex = []
    while(true){
        const index1 = Math.floor((Math.random()*1000))
        const index2 = Math.floor(Math.random()*1000)
        index1 % 2 === 0 ? listIndex.push(index1) : listIndex.push(index1+1)
        index2 % 2 === 0 ? listIndex.push(index2) : listIndex.push(index1+2)

        
        yield listIndex
        listIndex.length =0
    }
    
      

        
    }

const gen = generatePares()
console.log(gen.next().value)
console.log(gen.next().value)
const obj = {
    nombre:'Alex',
    apellido:'Garzo',
    edad:28,
    altura:1.76,
    eresDesarrollador: true
}

const edad = obj.edad

const obj2 = {
    nombre:'Juanito',
    apellido:'Pulgarcito',
    edad:32,
    altura:1.80,
    eresDesarrollador: false

}

const obj3 = {
    nombre:'Juanita',
    apellido:'Pulgarcita',
    edad:20,
    altura:1.50,
    eresDesarrollador: true

}

const listFriends = [obj, obj2, obj3]

const listNew = listFriends.sort((a,b)=> b.edad - a.edad)



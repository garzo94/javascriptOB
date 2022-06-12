const list = ['huevos', 'frijol','tortillas','jugo','jamon']
list.push('Aceite de Girasol')
list.pop()

const list2 = [{titulo:'titulo1', director: 'director1', fecha:new Date(2022,11,17)}, 
                {titulo:'titulo2', director: 'director2', fecha:new Date(1994,5,6)}, 
                {titulo:'titulo3', director: 'director3', fecha:new Date(2011,6,5)}]
// console.log(list2)
const listFecha = list2.filter(obj => obj.fecha > new Date(2010,1,1))
const listDirectores =  list2.map(obj => obj.director)
const listTitulos = list2.map(obj => obj.titulo)
const listConc1 = listDirectores.concat(listTitulos)
const listConc2 = [...listDirectores, ...listTitulos]



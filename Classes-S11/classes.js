class Estudiante{
    nombre =''
    asignaturas = []
    constructor(nombre, asignaturas ){
        this.nombre = nombre,
        this.asignaturas = asignaturas

        function obtenDatos(){
            return {
                nombre: this.nombre,
                asignaturas: this.asignaturas
            }
        }
    }
}

const estudiante1 = new Estudiante('Alexander',['javascript', 'HTML','CSS'])
console.log(estudiante1)
// Se inicializa una variable incluyendo el JSON en el propio código ya que la información contenida en dicha
// estructura debe ser accedida por las funciones que operan con los datos que se encuentran en la misma. Esto
// es posible debido a que este formato fue diseñado para facilitar la transferencia de datos entre un cliente
// y un servidor de manera simple y liviana.

var datosEjemplo = {
    empleados: [{
        dni: '12345678A',
        fechaNac: '01-01-1977',
        fechaIng: '02-02-2000',
        plusProd: 0.5,
        sueldo: 1000, 
        plusAnt: function(fechaIng) {
            const fecha = new Date();
            const actual = fecha.getFullYear();
            const aIng = fechaIng.substr(-4);
            var trabajados = actual - aIng;
            return (0.1 * (trabajados / 3));
        }
    },
    {
        dni: '23456789A',
        fechaNac: '01-01-1982',
        fechaIng: '02-02-2015',
        plusProd: 0.8,
        sueldo: 1500, 
        plusAnt: function(fechaIng) {
            const fecha = new Date();
            const actual = fecha.getFullYear();
            const aIng = fechaIng.substr(-4);
            var trabajados = actual - aIng;
            return (0.1 * (trabajados / 3));
        }
    }]
}

function calculate(fechaNac, sueldo, plusProd, plusAnt) {
    const fecha = new Date();
    const actual = fecha.getFullYear();
    const aNac = fechaNac.substr(-4);
    if((fecha.getDay() > fechaNac.substr(0, 2)) && (fecha.getMonth() > fechaNac.substr(3, 2))) {
        console.log(actual - aNac);
    } else {
        console.log(actual - aNac - 1);
    }
    var sueldoTotal = sueldo;
    sueldoTotal += (sueldoTotal * (plusProd / 100));
    sueldoTotal += (sueldoTotal * (plusAnt / 100));
    console.log(sueldoTotal);
}

function calcEmployee() {
    datosEjemplo.empleados.forEach((v, i) => (calculate(v.fechaNac, v.sueldo, v.plusProd, v.plusAnt(v.fechaIng))));
    return 0;
}


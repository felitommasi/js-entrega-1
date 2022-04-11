//!tarifario
const arrayPasajes = [];

class Pasaje {
    constructor(seccion, estacion, valor) {
        this.seccion = seccion;
        this.estacion = estacion;
        this.valor = valor;
    }
}

// ? seccion 1
let pasaje1 = arrayPasajes.push(new Pasaje('seccion1', 'YRIGOYEN', 50));
let pasaje2 = arrayPasajes.push(new Pasaje('seccion1', 'AVELLANEDA', 50));
let pasaje3 = arrayPasajes.push(new Pasaje('seccion1', 'GERLI', 50));
let pasaje4 = arrayPasajes.push(new Pasaje('seccion1', 'LANUS', 50));
let pasaje5 = arrayPasajes.push(new Pasaje('seccion1', 'ESCALADA', 50));
// ? seccion 2
let pasaje6 = arrayPasajes.push(new Pasaje('seccion2', 'BANFIELD', 70));
let pasaje7 = arrayPasajes.push(new Pasaje('seccion2', 'LOMAS DE ZAMORA', 70));
let pasaje8 = arrayPasajes.push(new Pasaje('seccion2', 'TEMPERLEY', 70));
let pasaje9 = arrayPasajes.push(new Pasaje('seccion2', 'ADROGUE', 70));
let pasaje10 = arrayPasajes.push(new Pasaje('seccion2', 'BURZACO', 70));
let pasaje11 = arrayPasajes.push(new Pasaje('seccion2', 'LONGCHAMPS', 70));
// ? seccion 3
let pasaje12 = arrayPasajes.push(new Pasaje('seccion3', 'GLEW', 90));
let pasaje13 = arrayPasajes.push(new Pasaje('seccion3', 'GUERNICA', 90));
let pasaje14 = arrayPasajes.push(new Pasaje('seccion3', 'KORN', 90));


//! compra pasaje
let saldoActual = 80;

function saludar() {
    let nombre = prompt('Por favor ingresa tu nombre para comenzar');
    while (nombre === "" || !isNaN(parseInt(nombre))) {
        nombre = prompt('Por favor ingrese un nombre válido para continuar');
    }
    alert(`Hola ${nombre}!\nTu saldo actual es de $${saldoActual}`);
}

let destino = prompt('Ingrese un destino para comprar su pasaje');
for (let info of arrayPasajes) {
    if (destino.toUpperCase() == info.estacion) {
        let valorPasaje = parseInt(info.valor);

        if ((saldoActual || nuevoSaldo()) < valorPasaje) {
            alert('Su saldo es insuficiente');
            let cargaSaldo = parseInt(prompt('Cargar saldo para continuar'));
            function nuevoSaldo(num1, num2) {
                return (saldoActual + cargaSaldo);
                }
        } else if (saldoActual > info.valor) {
            alert('Buen viaje \n\n * Su saldo restante es: $ ' + (saldoActual - info.valor));
        } else {
            alert('Por favor ingrese un destino valido');
        }
    }
}



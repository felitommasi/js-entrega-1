//! tarifario
const arrayPasajes = [];

class Pasaje {
    constructor(seccion, estacion, valor) {
        this.seccion = seccion;
        this.estacion = estacion;
        this.valor = valor;
    }
}

// ? seccion 1
let pasaje1 = arrayPasajes.push(new Pasaje("seccion1", "YRIGOYEN", 50));
let pasaje2 = arrayPasajes.push(new Pasaje("seccion1", "AVELLANEDA", 50));
let pasaje3 = arrayPasajes.push(new Pasaje("seccion1", "GERLI", 50));
let pasaje4 = arrayPasajes.push(new Pasaje("seccion1", "LANUS", 50));
let pasaje5 = arrayPasajes.push(new Pasaje("seccion1", "ESCALADA", 50));
// ? seccion 2
let pasaje6 = arrayPasajes.push(new Pasaje("seccion2", "BANFIELD", 70));
let pasaje7 = arrayPasajes.push(new Pasaje("seccion2", "LOMAS DE ZAMORA", 70));
let pasaje8 = arrayPasajes.push(new Pasaje("seccion2", "TEMPERLEY", 70));
let pasaje9 = arrayPasajes.push(new Pasaje("seccion2", "ADROGUE", 70));
let pasaje10 = arrayPasajes.push(new Pasaje("seccion2", "BURZACO", 70));
let pasaje11 = arrayPasajes.push(new Pasaje("seccion2", "LONGCHAMPS", 70));
// ? seccion 3
let pasaje12 = arrayPasajes.push(new Pasaje("seccion3", "GLEW", 90));
let pasaje13 = arrayPasajes.push(new Pasaje("seccion3", "GUERNICA", 90));
let pasaje14 = arrayPasajes.push(new Pasaje("seccion3", "KORN", 90));

//! proceso de compra
//saldo por defecto
let saldoActual = 80;

//cargar saldo al valor por defecto
function sumaSaldo(val1, val2) {
    return parseInt(val1 + val2);
}

//inicio del simulador
function saludar() {
    let nombre = prompt("Por favor ingresa tu nombre para comenzar");
    while (nombre === "" || !isNaN(parseInt(nombre))) {
        nombre = prompt("Por favor ingrese un nombre válido para continuar");
    }
    alert(`Hola ${nombre}!\nTu saldo actual es de $${saldoActual}`);
}

function existeEstacion(destino) {
    for (let info of arrayPasajes) {
        if (destino.toUpperCase() == info.estacion) {
            return true;
        }
    }
    return false;
}

function valorDePasaje(destino) {
    for (let info of arrayPasajes) {
        if (destino.toUpperCase() == info.estacion) {
            return info.valor;
        }
    }
}

saludar();

//compra del pasaje e informacion de saldo restante
let destino = prompt("Ingrese un destino para comprar su pasaje");

try {
    if (existeEstacion(destino)) {
        let valorPasaje = valorDePasaje(destino);
        console.log(`Escogio la estacion: ${destino}`);
        alert(`el valor del pasaje es $${valorPasaje}`);

        if (valorPasaje > saldoActual) {
            alert("Su saldo es insuficiente");
            let cargaSaldo = parseInt(prompt("Cargue saldo para continuar"));
            let nuevoSaldo = sumaSaldo(saldoActual, cargaSaldo);
            if (nuevoSaldo < valorPasaje) {
                console.log(`Su saldo actual es de ${nuevoSaldo}, por favor cargue saldo para continuar`);
                alert("Su saldo continua siendo insuficiente");
                cargaSaldo = parseInt(prompt("Cargue saldo para continuar"));
                nuevoSaldo = sumaSaldo(saldoActual, cargaSaldo);
            } else if (nuevoSaldo >= valorPasaje) {
                console.log(`Su saldo restante es: \$ ${nuevoSaldo - valorPasaje}`);
                alert('Buen viaje');
            }
        } else if (valorPasaje <= saldoActual) {
            console.log(`Su saldo restante es: \$ ${saldoActual - valorPasaje}`);
            alert('Buen viaje');
        } else {
            alert("error existeEstacion");
        }
    }
} catch (error) {
    alert(error);
}

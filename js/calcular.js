/* let nombre;
let apellido;

traigo la cantidad y calculo el valor del tiquets
function calcular(){
    let cantidad;
    let valorTiket = 200;

    cantidad = document.getElementById("inputCant").value;

    valor = cantidad * valorTiket;
    porc(valor)

}
traigo el descuento y calculo su poprcentaje
function porc(val,){
    let categoria;
    categoria = getElementById("inputCat").value
    total = (val * categoria) / 100;
    return total;
}
*/ 
const cantTiket = document.getElementById('inputCant')

const btnCalcular = document.getElementById('btnResumen')

const categoria = document.getElementById('inputSelect')

btnResumen.addEventListener('click',resumen)

const btnBorrar = document.getElementById('btnBorrar')

botonBorrar.addEventListener('click', borrar)


function resumen(){

  totalPagar =  calcularImporte(categoria.value, cantidadEntradas.value);

  if(cantidadEntradas.value == 0 || cantidadEntradas.value == ''){
    alert("DEBE INGRESAR LA CANTIDAD DE ENTRADAS QUE DESEA ADQUIRIR")
  }

  totalCompra.innerHTML=  `Total a Pagar: $ ${totalPagar}`

}

const calcularImporte = (categoria, cantidad) => {
  valorTicket = 200;
  totalPagar = 0;

  descuentos = {
    estudiante: 0.8,
    trainee: 0.5,
    junior: 0.15
  }

  descuentoTotal = valorTicket * descuentos[`${categoria}`] * cantidad;

  return totalPagar = valorTicket * cantidad - descuentoTotal

}

function borrar () {
  totalCompra.innerHTML=  `Total a Pagar: $ 0`
}
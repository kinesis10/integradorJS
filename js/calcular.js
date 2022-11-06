
const cantTiket = document.getElementById('inputCant');
const btnCalcular = document.getElementById('btnResumen');
const categoria = document.getElementById('inputSelect');
const btnBorrar = document.getElementById('btnBorrar');
btnCalcular.onclick = resumen;
btnBorrar.onclick = borrar;


function resumen(){

  totalSinDescuento =  calcularImporte(cantTiket.value);
  totalPagar = totalSinDescuento - descuentoPorcentaje (categoria.value,totalSinDescuento)

  if(cantTiket.value == 0 || cantTiket.value == ''){
    alert("Ingrese una cantidad valida")
  }
  

  totalCompra.innerHTML = `Total a Pagar: $ ${totalPagar}`

}

function calcularImporte (cantidad){
  const valorTicket = 200;
  return cantidad * valorTicket;
}
 function descuentoPorcentaje(desc,valorImp){
     return desc * valorImp;
 }

function borrar () {
  totalCompra.innerHTML=  `Total a Pagar: $ 0`
}
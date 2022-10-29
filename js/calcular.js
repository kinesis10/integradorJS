let nombre;
let apellido;

// traigo la cantidad y calculo el valor del tiquets
function calcular(){
    let cantidad;
    let valorTiket = 200;

    cantidad = document.getElementById("inputCant").value;

    valor = cantidad * valorTiket;
    porc(valor)

}
// traigo el descuento y calculo su poprcentaje
function porc(val,){
    let categoria;
    categoria = getElementById("inputCat").value
    total = (val * categoria) / 100;
    return total;
}


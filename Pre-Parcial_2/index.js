let indiceSeleccionado = selectorMoneda.selectedIndex
let monedaExtranjera = document.getElementById("cantidadMoneda")

function getMonedaExtranjera(){
    if(monedaExtranjera.value > 0){
        return monedaExtranjera.value
    }
    else{
        return alert("Ingrese un monto mayor a 0 para efectuar la operación")
    }
}

function getSelected(){
    

    switch(indiceSeleccionado){
        case 1:
            return 114.5 //Euro
        case 2:
            return 99.75 //Dolar
    }
}

function calcularPesos(){
    let cantExtranjera = getMonedaExtranjera()

    let tipoMoneda = getSelected()

    let pesos = cantExtranjera * tipoMoneda

    return console.log(pesos)
}

calcular.onclick = calcularPesos;
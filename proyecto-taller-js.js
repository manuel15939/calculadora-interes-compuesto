
const capital = document.getElementById('capital');
const tasaInteres = document.getElementById('tasa_interes');
const tiempo = document.getElementById('tiempo');
const botonCalcular = document.getElementById('calcular');
const resultado = document.getElementById('total');
const interesAPagar = document.getElementById('interes')
const inputAnual = document.getElementById('anual');
const inputTrimestral = document.getElementById('trimestral');

botonCalcular.addEventListener('click',calcularInteresCom)


// capacidad de endeudamiento

const ingresos = 0;
const gastos = 0;

function capacidadEndeudamiento (ingreso, gasto){
    resultado = (ingreso-gasto)*0.35;
    return resultado
}

// interes compuesto


function calcularInteresCom () {
    
    const cap = capital.value
    const int = tasaInteres.value
    const tie = tiempo.value
    if (int <=1 ){
        resultado.innerHTML = 'coloca el valor en %'
    }else if(inputAnual.checked){
        const interes = (1+(int/100))
        const result = cap*Math.pow(interes,tie)
        console.log(result);
        resultado.innerHTML = Math.trunc(result) 
        interesAPagar.innerText = Math.trunc(result-cap) 
    }else if (inputTrimestral.checked){
        const interes = (1+(int/100))
        const result = cap*Math.pow(interes,(tie/4))
        console.log(result);
        resultado.innerHTML = Math.trunc(result) 
        interesAPagar.innerText = Math.trunc(result-cap) 
    }else{resultado.innerHTML = 'selecciona un tipo de capitalizacion' }

    
    
}


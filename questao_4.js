function calcularFrete(peso) {
    if (peso <= 5) {
        frete = 20   
    } else if (peso > 5 && peso <= 20) {
        frete = 50    
    } else {
        frete = 100    
    }
    console.log(frete);
}

calcularFrete(12)
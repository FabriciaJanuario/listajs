function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i > 0; i--) {
        fatorial *= i;
    }
    console.log(fatorial);
}

calcularFatorial(5); 
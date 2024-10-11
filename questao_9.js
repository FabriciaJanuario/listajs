function imprimirPares(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

imprimirPares(10); 
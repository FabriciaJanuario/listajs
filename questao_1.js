function calcularDesconto(preco, tipoCliente) {
    if (tipoCliente === "membro") {
        console.log(preco * 0.9);
    } else {
        console.log(preco);
    }
}

calcDesc(100, "membro")
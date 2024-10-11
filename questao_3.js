function verificarIdade(idade) {
    if (idade >= 65) {
        console.log("idoso");
        
    } else if (idade >= 18 && idade <= 64) {
        console.log("maior de idade");
        
    } else if(idade < 18) {
        console.log("menor de idade");
    }
}

verificarIdade(20)
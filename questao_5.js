function classificarTemperatura(temperatura) {
    if (temperatura < 15) {
        classificacao = "Frio";
    } else if (temperatura <= 25) {
        classificacao = "Agradável";
    } else {
        classificacao = "Quente";
    }
    console.log(classificacao)
}

classificarTemperatura(22);  

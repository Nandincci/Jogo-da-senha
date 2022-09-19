function verificar(){
    var valor = document.getElementById("valor").value;
    if (valor === "247"){
        document.getElementById("resultado").style.color = 'green'; 
        document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    }else{
        document.getElementById("resultado").style.color = 'red'; 
        document.getElementById("resultado").innerHTML = "Você errou!";
    }
}

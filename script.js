/*La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

//const text = 'felicidades por enfrentar este desafio y haberlo concluido con exito!';

//let a = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";        

var textEncrip = document.getElementById("textoE");
var textDescrip = document.getElementById("textoD");
var botonEncrip = document.getElementById("botonE");
var botonDesncrip = document.getElementById("botonD");
var botonCopiar = document.getElementById("botonC");

function encriptar(){            
    if(textEncrip.value == ""){
        document.write("escribe algo");
    }else{
        textEncrip.value = textEncrip.value.toLowerCase();
        let res = textEncrip.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        textDescrip.value = res;
    }
    textEncrip.value = "";
}

function desencriptar(){
    if(textDescrip.value == ""){
        document.write("escribe algo");
    }else{
        textDescrip.value = textDescrip.value.toLowerCase();
        let res = textDescrip.value.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        textEncrip.value = res;
    }
    textDescrip.value = "";
}

function copiar(textoCopiado){
    textoCopiado = textDescrip.value;
    navigator.clipboard.writeText(textoCopiado);
    botonCopiar.textContent="Copiado";
}

botonEncrip.onclick = encriptar;
botonDesncrip.onclick = desencriptar;
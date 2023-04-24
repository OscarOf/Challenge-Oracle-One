/*La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

//const text = 'felicidades por enfrentar este desafio y haberlo concluido con exito!';

//console.log(text.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat"));

//let a = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";        

//console.log(a.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u"));

var textEncrip = document.getElementById("textoE");
var textDescrip = document.getElementById("textoD");
var botonEncrip = document.getElementById("botonE");
var botonDesncrip = document.getElementById("botonD");

function encriptar() {        
    //console.log(textEncrip.value);
    if(textEncrip.value == ""){
        document.write("escribe algo");
    }else{
        let res = textEncrip.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        document.write(res);
    }
}

function desencriptar(){
    if(textDescrip == ""){
        document.write("escribe algo");
    }else{
        let res = textDescrip.value.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        document.write(res);
    }
}

botonEncrip.onclick = encriptar;
botonDesncrip.onclick = desencriptar;
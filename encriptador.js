window.onload = (event) => {
    
   
    
    const botonDesencriptar = document.querySelector("#boton-encriptar");
};


function encriptar(){
    let texto1 = document.querySelector(".texto-para-encriptar").value.toLowerCase();

    let textoEncriptado = texto1.replace(/e/img, "enter");
        textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

       document.querySelector("#texto-para-desencriptar").value = textoEncriptado;
       
       document.getElementById("mensaje").style.display="none";

}

function desencriptar(){

    let texto1 = document.querySelector(".texto-para-encriptar").value.toLowerCase();

    let textoEncriptado = texto1.replace (/entre/img,"e");
        textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        document.querySelector("#texto-para-desencriptar").value = textoEncriptado; 

}

function copiar(){
    
    let texto = document.getElementById("texto-para-desencriptar");
    texto.select();
    document.execCommand("copy");
}
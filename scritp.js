const cifradas = {"a" : "ai", "e" : "enter", "i" : "imes", "o" : "ober", "u" : "ufat"};

document.addEventListener("DOMContentLoaded", ()=>{
    let texto = document.getElementById("entrada");
    let resultado = document.querySelector(".resultado");
    let botonCopiar = document.getElementById("copiar");

    document.getElementById("cifrar").addEventListener("click", ()=>{
        resultado.innerHTML = cifrar(texto.value);
        botonCopiar.classList.replace("boton-copiado", "boton-copiar");
        botonCopiar.innerHTML = "Copiar".trim();
    })

    document.getElementById("copiar").addEventListener("click", ()=>{
        copiar();
        botonCopiar.classList.replace("boton-copiar", "boton-copiado");
        botonCopiar.innerHTML = "Copiado".trim();
    });

    document.getElementById("descifrar").addEventListener("click", ()=>{
        resultado.innerHTML = descifrar(texto.value);
        botonCopiar.classList.replace("boton-copiado", "boton-copiar");
        botonCopiar.innerHTML = "Copiar".trim();
    })
})

function cifrar(palabraCifrar){
    let fraseCifrar = palabraCifrar.toLowerCase().trim();
    let resultado = "";

    for (letra in fraseCifrar){
        if(fraseCifrar[letra].charCodeAt(0) > 128){
            error = "Su informacion contiene contenido tildes o acentos, por favor intentelo de nuevo";
            resultado = `<p style="font-size: 2em; width: 50%; color: darkred; text-align: center; font-weight:bold;">${error}</p>`;
            break;
        }
        if (Object.keys(cifradas).includes(fraseCifrar[letra])){
            resultado += cifradas[fraseCifrar[letra]];
        } else resultado += fraseCifrar[letra];
    }
    return resultado;
}

function descifrar(palabraDescifrar){
    let fraseCifrada = palabraDescifrar.toLowerCase().trim();
    let resultado = "";

    for (key in cifradas){
        if (fraseCifrada.includes(cifradas[key])){
            fraseCifrada = fraseCifrada.replaceAll(cifradas[key], key);
        }
        resultado = fraseCifrada;
    }

    return resultado;
}

function copiar(){
    let texto = document.querySelector(".resultado").textContent.trim();
    navigator.clipboard.writeText(texto);
}

function cambiarCopia(){
    botonCopiar.classList.replace("boton-copiado","boton-copiar");
}

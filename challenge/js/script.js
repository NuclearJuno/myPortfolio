console.log(`hello, world`)

const inputTexto = document.getElementById("inputTexto");
const botaoEncript = document.getElementById("botaoEncript");
const botaoDescrip = document.getElementById("botaoDescrip");
const botaoCopiar = document.getElementById("botaoCopiar");
const mensagemFinal = document.getElementById("mensagemFinal");

const boneco = document.getElementById("boneco");
const direitaInfo = document.getElementById("direitaInfo");
const direita = document.getElementById("direita1");


//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

let replace = [
["e", "enter"],
["i", "imes"],
["a", "ai"],
["o", "ober"],
["u", "ufat"],
]

const replace1 = (novoValor) =>{
    mensagemFinal.innerHTML = novoValor

    boneco.classList.add("oculto");
    inputTexto.value = "";
    direitaInfo.style.display = "none";
    botaoCopiar.style.display = "block";
    direita.classList.add("ajustar");
    mensagemFinal.classList.add("ajustar");
    console.log(encriptar(texto))
}

const reset = () => {
    mensagemFinal.innerHTML = "";

    boneco.classList.remove("oculto");

    direitaInfo.style.display = "block";
    botaoCopiar.style.display = "none";
    direita.classList.remove("ajustar");
    mensagemFinal.classList.romove("ajustar");
    inputTexto.focus();
}

botaoEncript.addEventListener("click", ()=>{
    const texto = inputTexto.value.toLowerCase();
    if(texto !=""){
        function encriptar(novoTexto){
            for(let i=0; i < replace.length; i++ ){
            if(novoTexto.includes(replace[i][0]))
                novoTexto = novoTexto.replaceAll(replace[i][0], replace[i][1]);
            };
            return novoTexto
        };
    }else{
        alert("Voce não inseriu o texto!!")
    }
    // const textoEncriptado = encriptar(texto);
    replace1(encriptar(texto));
   
});
console.log("")
botaoDescrip.addEventListener("click", ()=>{
const texto = inputTexto.value.toLowerCase();
    if(texto !=""){
    function desencriptar(novoTexto){
        for(let i=0; i < replace.length; i++){
            if(novoTexto.includes(replace[i][1]))
                novoTexto = novoTexto.replaceAll(replace[i][1], replace[i][0]
            );
        };
        return novoTexto
    };
}else{
alert("Voce não inseriu o texto!!")
reset();
}
    // const textoDesencriptado = desencriptar(texto);
    replace1(desencriptar(texto))
});

botaoCopiar.addEventListener("click", ()=>{
    let texto = mensagemFinal;
    // navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    reset();
});
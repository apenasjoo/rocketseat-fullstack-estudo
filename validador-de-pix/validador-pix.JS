
const chaves = [
    "64.466.443/0001-55",
    "joão@gmail.com",
    "+5515969587994"
]
function chaveEhConfiavel(chave){
    return chaves.includes(chave)
}
function verificarTransferenciaPix(chave, valor){
    if(chaveEhConfiavel(chave)) {
        if (valor >= 4000) {
            console.log("Transferência permitida para contato confiável.")
        }
        else {
            console.log("Transferência não permitida. Valor abaixo do mínimo para contatos confiáveis.")
        }
    } 
    else {console.log("❌ Transferência não permitida. Chave não pertence a um contato confiável.")
    } 


}

verificarTransferenciaPix("64.466.443/0001-55", 5000);
verificarTransferenciaPix("64.466.443/0001-55", 2000);
verificarTransferenciaPix("joão@gmail.com", 5000);

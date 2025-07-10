const chaves = ["email@gmail.com", "144.144.144-97", "+5521991752558"];

function chaveEhConfiavel(chave) {
  return chaves.includes(chave);
}

function VerificarTransferenciaPix(chave, valor) {
  if (chaveEhConfiavel(chave)) {
    if (valor >= 5000) {
      console.log("Transferencia Permetida, Contato confiavel");
    } else {
      console.log(
        "Transferencia não permitida. valor abaixo do minimo para contatos confiaveis"
      );
    }
                                }
     else
    console.log(
      "❌ Transferência não permitida. Chave não pertence a um contato confiável."
    );
}

VerificarTransferenciaPix("144.144.144-97", 2000);   


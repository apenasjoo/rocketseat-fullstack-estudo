const produtos = ["Mouse", "Teclado", "Monitor", "Notebook"];

for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto ${i + 1}: ${produtos[i]}`);
}

// exemplo para mostrar o break e if no loop

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
}

// usando continue; ele pula a execução do momento.

for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
}

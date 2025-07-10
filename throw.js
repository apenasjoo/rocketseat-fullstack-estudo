function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("Não digite 0");
    }
    return a / b;
  } catch (erro) {
    console.log("Não é possível dividir por zero " + erro.message);
  }
}

console.log(dividir(5, 0));



// codigo acima feito por mim

// codigo abaixo feito pelo professor, usando na pratica oque aprendemos


function cadastrarUsuario(usuario) {
  try {
    if (!usuario.nome || !usuario.email) {
      throw new Error("Todos os campos são obrigatórios.");
    }

    // Simula inserção no banco
    console.log("Usuário cadastrado com sucesso:", usuario);

  } catch (erro) {
    console.error("Falha ao cadastrar:", erro.message);
  }
}

// Testando
cadastrarUsuario({ nome: "João" }); // Falta o email

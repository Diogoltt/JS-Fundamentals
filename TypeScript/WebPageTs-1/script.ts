function saudarTipadoo(): void {
    const input = document.getElementById("nome");

    // Verificar se o elemento existe e é um input
    if (input && input instanceof HTMLInputElement) {
        const nome = input.value.trim(); // Trim remove espaços em branco no início e fim

        if (nome === "") {
            alert("Por favor, digite seu nome.");
        } else {
            alert(`Olá ${nome}, tudo bem?`);
        }

    } else {
        alert("Elemento não encontrado com o id 'nome'");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const abrir = document.getElementById("abrirModal");
    const fechar = document.getElementById("fecharModal");

    abrir.onclick = () => modal.style.display = "block";
    fechar.onclick = () => modal.style.display = "none";

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})
function selectById() {
    const titulo = document.getElementById("titulo");
    console.log(titulo)
}

function selectByClass() {
    const titulo = document.getElementsByClassName("paragrafo");
    console.log(titulo)
}

function selectByTag() {
    const titulo = document.getElementsByTagName("li");
    console.log(titulo)
}

selectById();
selectByClass();
selectByTag();
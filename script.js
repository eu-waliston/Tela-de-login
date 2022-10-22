const btn = document.getElementById('btn-infos');

function userInfo(element){
    const username = element.children.username.value;
    const password = element.children.password.value;


    // Cria um item no local storage
    window.localStorage.setItem(username, password);


    if(username === "" && password === "") {
        alert("Campos De Usuarios e senha vazios");
    } else {
        window.location.href = "page.html"
    }

}

const  sairDaPag = document.getElementById('page2')
function sair(){
    window.location.href  = "index.html";
}

document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
});

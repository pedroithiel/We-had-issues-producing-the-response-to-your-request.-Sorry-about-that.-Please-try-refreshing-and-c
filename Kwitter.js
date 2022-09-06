function logar() {
    var login = document.getElementById("nomeUsuario").value;
    localStorage.setItem("name", login);
    window.location= "kwitter_room.html";
}
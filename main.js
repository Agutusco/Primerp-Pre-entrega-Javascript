//INICIO Y REGISTRO
//REGISTRO
const contenedorPrincipal = document.getElementById("contenedorPrincipal")
const formSesion = document.getElementById("form-us-sesion")
const nombre = document.getElementById("nombre")
const pass = document.getElementById("pass")
const registerBtn = document.getElementById("registerBtn")
const aviso = document.getElementById("aviso") 
const sesionBtn = document.getElementById("sesionBtn")
pass.addEventListener("input", controlarContrasenia);



let currentUser = null


function loginExitoso(username) {
    currentUser = username
    localStorage.setItem("loggedInUser", username)

    sesionBtn.addEventListener("click", () =>{
        location.href = "/pages/inicio.html"
    })
}

function guardarUsuario() {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
        currentUser = username;
    }
}

function controlLoginORegistro(event) {
    event.preventDefault()
    const username = nombre.value.trim()
    const password = pass.value.trim()

    const usersData = JSON.parse(localStorage.getItem("users")) || []

    const user = usersData.find((user) => user.username === username)

    if (user) {
        if (user.password === password) {
            loginExitoso(username)
            aviso.innerHTML = ``
        }else{
            aviso.innerHTML = `Contraseña incorrecta`
        }
    }else{
        aviso.innerHTML = `Usuario no registrado`
    }
}



//CONTROLAR CONTRASEÑA
let indicador = pass.value
function controlarContrasenia() {

    indicador.length < 3 && (aviso.innerHTML = "Contraseña poco segura")
    indicador.length < 6 && (aviso.innerHTML = "Contraseña segura")
    indicador.length < 8 && (aviso.innerHTML = "Increible contraseña")
}

function controlarRegistro() {
    
    const username = nombre.value.trim();
    const password = pass.value.trim();

    const usersData = JSON.parse(localStorage.getItem("users")) || []

    const usuariosExistentes = usersData.find((user) => user.username === username)
    
    if (username === "" && password === "") {
        aviso.innerHTML = `Falta completar los campos`
    }else{
        if (usuariosExistentes) {
            aviso.innerHTML = `El usuario ya existe`
        }
        else{
            usersData.push({username, password})
            localStorage.setItem("users", JSON.stringify(usersData))
            controlarContrasenia()
            registerBtn.addEventListener("click", () =>{
                location.href = "/pages/inicio.html"
            })
            if (indicador.length <= 8) {
                loginExitoso(username)
            }
    }
    }
    
}

formSesion.addEventListener("submit", controlLoginORegistro)
registerBtn.addEventListener("click", controlarRegistro)

document.addEventListener("DOMContentLoaded", () =>{
    const usuarioGuardado = localStorage.getItem("loggedInUser")
    if (usuarioGuardado) {
        loginExitoso(usuarioGuardado)
    }
})

guardarUsuario()



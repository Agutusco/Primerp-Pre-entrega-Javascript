const wrapper = document.querySelector(".wrapper")
const botones = document.getElementsByClassName("btn")
const carousel = document.getElementById("carousel")
const slides = carousel.querySelectorAll(".slide")


for(let i = 0; i < botones.length; i++){
    
    botones[i].addEventListener("click", function(){
        const loader = document.getElementById("loader")
        loader.style.display = "block"
        wrapper.style.display = "none"


        setTimeout(function(){
            loader.style.display = "none"
            carousel.style.display = "block"
        },3000)
    })
}



//Musica
const rock = document.getElementById("btnRock")
const latina = document.getElementById("btnLatina")
const electronica = document.getElementById("btnEle")
const rock1 = document.getElementById("rock1")
const latina1 = document.getElementById("latina1")
const ele1 = document.getElementById("ele1")
const escucharBtn = document.getElementById("escuchar")
const pausa = document.querySelector(".pausar")


let posicionReproduccionRock
let posicionReproduccionLatina
let posicionReproduccionEle

rock.addEventListener("click", escuchar)
latina.addEventListener("click", escuchar)
electronica.addEventListener("click", escuchar)
pausa.addEventListener("click", pausar)


function pausar() {
    posicionReproduccionRock = rock1.currentTime
    rock1.pause()
    posicionReproduccionLatina = rock1.currentTime
    latina1.pause()
    posicionReproduccionEle = rock1.currentTime
    ele1.pause()
}


function escuchar(event) {
    if (event.target === rock) {
        rock1.play()
        latina1.pause()
        ele1.pause()
        latina1.currentTime = 0
        ele1.currentTime = 0
    }else if (event.target === latina){
        latina1.play()
        rock1.pause()
        ele1.pause()
        rock1.currentTime = 0
        ele1.currentTime = 0
    }else if (event.target === electronica){
        ele1.play()
        rock1.pause()
        latina1.pause()
        rock1.currentTime = 0
        latina1.currentTime = 0
    }
}


const btnSesion = document.getElementById("btnSesion")
btnSesion.addEventListener("click", () =>{
    Swal.fire({
        title: "¿Estás seguro que quieres salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "black",
        cancelButtonColor: "#d33",
        confirmButtonText: `<a href="../index.html"  style="color: white; text-decoration: none;">Si, quiero</a>`
    })
})


//BIENVENIDA CON NOMBRE
const bienvenida = document.getElementById("bienvenida")
const nombre = localStorage.getItem("loggedInUser")
bienvenida.innerText = `!!Hola ${nombre}!!`



//PODIO CON FETCH
const min = 10000;
const max = 70000;


const randomNumbers = Array.from({ length: 3 }, () =>
  Math.floor(Math.random() * (max - min + 1) + min)
);

randomNumbers.sort((a, b) => b - a);


const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

        const users = data;

        const podiumUsers = users.slice(0, 3);

    for (let i = 0; i < podiumUsers.length; i++) {
    const user = podiumUsers[i];
    const randomNumber = randomNumbers[i];

        const podiumItem = document.createElement("div");
        const span = document.createElement("span");
        podiumItem.classList.add("podium-item");
        span.classList.add("span-item")
        podiumItem.textContent = user.name;
        span.innerText = `${randomNumber} reproducciones`;
        podiumItem.appendChild(span);
        document.querySelector(".podium").appendChild(podiumItem);
    }
});

btnSesion.addEventListener('click', () =>{
    localStorage.removeItem("loggedInUser");
  currentUser = null;
})
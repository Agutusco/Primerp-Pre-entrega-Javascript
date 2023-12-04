
let bienvenida = alert("Bienvenido a multifruta")

let precio1 = 1200 
let precio2 = 900
let precio3 = 1100
let precio4 = 800
let precio5 = 600

let cantidad1 = 0
let cantidad2 = 0
let cantidad3 = 0
let cantidad4 = 0
let cantidad5 = 0

let productos
let suma
do{
    
    productos = prompt('\n¿Que productos quiere? Atención, solo vendemos por KILO. Si no desea comprar ahora, presiona 0\n Naranjas ($1200), Frutillas ($900),\n bananas ($1100),\n Mandarinas ($800),\n Peras ($600) ').toLowerCase()

    if(productos === ""){
        alert("No seleccionaste ningún producto")
    }else if (productos === "0"){
        alert("Hasta la próxima!!")
        break
    }else{
        switch (productos){
            case "naranjas":
                cantidad1 = verificarNum("¿Cuantos kilos de naranja quiere?")
                console.log("naranjas $1200");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "frutillas":
                cantidad2 = verificarNum("¿Cuantos kilos de frutillas quiere?")
                console.log("frutillas $900");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "bananas":
                console.log("bananas $1100");
                cantidad3 = verificarNum("¿Cuantos kilos de banana quiere?")
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "mandarinas":
                cantidad4 = verificarNum("¿Cuantos kilos de mandarina quiere?")
                console.log("mandarinas $800");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "peras":
                cantidad5 = verificarNum("¿Cuantos kilos de peras quiere?")
                console.log("peras 600");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            default:
                alert("no tenemos ese producto");
    }
    }

    if (productos != 0) {
        alert("Tu monto por ahora es de " + sumaTodo())
        alert("Su precio final es de " + descuentos())
    }
}while(productos !== "")







function sumaTodo() {
    suma = (precio1 * cantidad1) + (precio2 * cantidad2) + (precio3 * cantidad3) + (precio4 * cantidad4) + (precio5 * cantidad5)
    return suma
}

function verificarNum(str) {
    let num = Number(prompt(str))

    while (isNaN(num)) {
        num = Number(prompt(str))
    }

    return num

}

function descuentos() {
        let envio = prompt("¿Lo retiras en tienda? Habrá una suma de $300 si lo llevamos a su domicilio", "Si/No").toLowerCase()
        if (envio === "si") {
            suma = suma
        }else if(envio === "no"){
            let domicilio = prompt("¿Cuál es su domicilio?")
            suma += 300
            alert("Perfecto, llevaremos su pedido a " + domicilio)
        }
        
        let pago = prompt("¿Pagas en efectivo? Hay un descuento de $700 con este medio de pago", "Si/No").toLowerCase()
    
        if (pago === "no") {
            suma = suma
        }else if (pago === "si"){
            suma -= 700
        }
    
        return suma
}
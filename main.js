


const productos = [
    {nombre:"Manzana" , tipo: "Fruta", stock: true, precio: 1200, cantidad:0},
    {nombre:"Mandarina" , tipo: "Fruta", stock: true, precio: 900, cantidad:0},
    {nombre:"Lechuga" , tipo: "Verdura", stock: false, precio: 1100, cantidad:0},
    {nombre:"Pepino", tipo: "Verdura", stock: true, precio: 1400, cantidad:0},
    {nombre:"Orégano", tipo: "Especias", stock: true, precio: 900, cantidad:0},
    {nombre:"Mentas", tipo: "Especias", stock: false, precio: 700, cantidad:0}
]
class Pago {
    constructor(medio,tarjeta, codigo, dni){
        this.medio = medio
        this.tarjeta = tarjeta
        this.codigo = codigo
        this.dni = dni 
    }
}

let codigoSeg = ""
function code() {
    while (codigoSeg.length !== 4) {
        codigoSeg = prompt("Ingresa el código de seguridad (4 dígitos)")
    }
    
    return codigoSeg
    
}
let dniSecurity = ""
function dniSeg() {
    while(dniSecurity.length !== 8){
        dniSecurity = prompt("Ingresa tu DNI")
    }
    return dniSecurity
}

function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
    }

    let d = new Date();
console.log();


let bienvenida = alert("Bienvenido a multifruta, estos son nuestros productos")

let productosElegidos = []
let preguntaProds
let quantity
let suma = 0
let stocks

stocks = productos.filter(elm => elm.stock === false )

stocks.forEach((producto) => {
    stocks = stocks.slice(0, -2) + `, ${producto.nombre}`
})

alert(`Antes de iniciar, queriamos contarle que no contamos con los siguientes productos por falta de stock: ${stocks} `)



do{
    
    let mostarProds = productos.map((elm) => ` ${elm.nombre}: $${elm.precio}.
    `)
    preguntaProds = prompt('¿Que productos quiere? Atención, solo vendemos por KILO' + mostarProds.join("")).toLowerCase()
    
    if(preguntaProds === ""){
        alert("No seleccionaste ningún producto")
    }else if (preguntaProds === "0"){
        alert("Hasta la próxima!!")
        break
    }else{
        switch (preguntaProds){
            case "manzanas":
                quantity = verificarNum("¿Cuantos kilos de manzana quiere?")
                productosElegidos.push(preguntaProds)
                suma += quantity * productos[0].precio
                console.log("manzana $1200");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "mandarina":
                quantity = verificarNum("¿Cuantos kilos de mandarina quiere?")
                productosElegidos.push(preguntaProds)
                suma += quantity * productos[1].precio
                console.log("mandarina $900");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "lechuga":
                alert("Lo siento, no tenemos este producto")
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "pepino":
                quantity = verificarNum("¿Cuantos kilos de pepinos quiere?")
                productosElegidos.push(preguntaProds)
                suma += quantity * productos[3].precio
                console.log("pepino $1400");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            case "oregano":
                quantity = verificarNum("¿Cuantos kilos de oregano quiere?")
                productosElegidos.push(preguntaProds)
                suma += quantity * productos[4].precio
                console.log("oregano 900");
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
            case "menta":
                alert("Lo siento, no tenemos este producto")
                if(!confirm('¿Quiere seguir comprando?')) {
                    break
                }
                continue
            default:
                alert("no tenemos ese producto");
    }
    }

    if (preguntaProds != 0) {
        alert("Su precio final es de " + descuentos())
        break
    }
}while(preguntaProds !== "")
console.log(productosElegidos);
console.log(suma);



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
        alert(`Perfecto, su pedido fue realizado el día ${d}.
        Enviaremos su pedido a la siguiente ubicación: ${domicilio} el día ${sumarDias(d, +4)}`)
    }
    
        let medioPago = prompt(`¿Cual sera tu medio de pago?
        Tarjeta Santander 10% OFF
        Efectivo $700 OFF
        Tarjeta Frances
        Mercado Pago`).toLowerCase()
        
        if (medioPago === "santander" || medioPago === "tarjeta santander") {
            const santander = new Pago("Tarjeta de Crédito", "Tarjeta Santander",code(), dniSeg())
            console.log("si");
            suma = suma * 0.9
            alert(`Datos de su compra: 
            productos: ${preguntaProds}. Usted llevo ${quantity} kilo/s
            Datos de su pago: ${santander.medio}, ${santander.tarjeta}. Su código de seguridad es: ${santander.codigo} y su DNI es: ${santander.dni}`)
        }else if (medioPago === "efectivo"){
            const efectivo = new Pago("Efectivo", "", "", "")
            suma -= 700
            alert(`Datos de su compra: 
            productos: ${preguntaProds}. Usted llevo ${quantity} kilo/s
            Datos de su pago: ${efectivo.medio}`)
        }else if(medioPago === "frances" || medioPago === "tarjeta frances"){
            const frances = new Pago("Tarjeta de crédito", "Tarjeta Francés", code(), dniSeg())
            suma = suma
            alert(`Datos de su compra: 
            productos: ${preguntaProds}. Usted llevo ${quantity} kilo/s
            Datos de su pago: ${frances.medio}, ${frances.tarjeta}. Su código de seguridad es: ${frances.codigo} y su DNI es: ${frances.dni}`)
        }else if (medioPago === "mercado pago"){
            const mp = new Pago("Mercado Pago", "", "", "")
            suma = suma
            alert(`Datos de su compra: 
            productos: ${preguntaProds}. Usted llevo ${quantity} kilo/s
            Datos de su pago: ${mp.medio}`)
        }
    
        return suma
}


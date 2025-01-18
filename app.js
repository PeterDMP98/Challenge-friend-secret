const nombres = []
let amigoSecreto = ""

function agregarAmigo() {

    const nombre = document.getElementById("amigo").value.trim()
    
    if (nombre === "") {
    alert("Por favor ingresa un nombre")
    } else {
        if (nombres.includes(nombre)) {
            alert("esta persona ya esta agregada")
        }else{
        nombres.push(nombre)
        document.getElementById("amigo").value = ""
        }

    }
    listaNombres()

}

function listaNombres() {
    if (nombres.length === 0 ) {
        document.getElementById("listaAmigos").innerHTML = ""   
    } else{
        document.getElementById("listaAmigos").innerHTML = ""   
        for (let i = 0; i < nombres.length; i++) {
            const li = document.createElement("li")
            li.textContent = nombres[i]
            listaAmigos.appendChild(li)
        }
    }
}

function sortearAmigo() {
    document.getElementById("listaAmigos").innerHTML = ""

    if (nombres.length === 0) {
        alert("no hay nombres registrados")
    } else {
        nombreAmigo = nombres[Math.floor(Math.random() * nombres.length)]
        document.getElementById("resultado").innerHTML = `<l1> el amigo secreo es: ${nombreAmigo}</li>`
    }

}


function resetear() {
    nombres.splice(0, nombres.length)
    document.getElementById("resultado").innerHTML =  ""
    document.getElementById("listaAmigos").innerHTML = ""
    
}

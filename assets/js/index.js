//Elemento del Dom 
const tarea_input = document.getElementById("tarea_Input")
const boton_Agregar = document.getElementById("botonAgregar")
const total_tarea = document.getElementById("tareas-Total")
const tarea_realizadas = document.getElementById("tarea-Realizadas")
const listaTarea = document.getElementById("listaTareas")

const toda_la_lista = [
    {
        id: 114,
        tarea: 'Hacer ejercicios',
        realizado: false
    },
    {
        id: 115,
        tarea: 'ir de compras',
        realizado: false
    },
    {
        id: 116,
        tarea: 'Sacar mascota',
        realizado: false
    },
]

const desplegar = () => {
    listaTarea.innerHTML = ""
    toda_la_lista.forEach((elemento) => {
        const btnEliminar = `<button type="button" class="btn btn-outline-danger" onclick="borrar(${elemento['id']})">X</button>`
        const check_made = `<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="marcacheck(${elemento['id']})" ${elemento['realizado'] ? "checked" : ""}>`
        listaTarea.innerHTML +=`<tr><td>${elemento['id']}</td><td>${elemento['tarea']}</td><td>${check_made}</td><td>${btnEliminar}</td></tr>`
    })
    total_tarea.innerHTML = toda_la_lista.length
    const made_list = toda_la_lista.filter((elem) => elem['realizado'] == true)
    tarea_realizadas.innerHTML = made_list.length
}

const borrar = (id) => {
    const index = toda_la_lista.findIndex((ele) => ele.id == id)
    toda_la_lista.splice(index, 1)

    desplegar()
}

const marcacheck = (id) => {
    let actualiza = ""
    const index = toda_la_lista.findIndex((ele) => ele.id == id)
    if (toda_la_lista[index]['realizado']) {
        actualiza = {id: toda_la_lista[index]['id'], tarea: toda_la_lista[index]['tarea'], realizado: false}
    } else {
        actualiza = {id: toda_la_lista[index]['id'], tarea: toda_la_lista[index]['tarea'], realizado: true}
    }

    toda_la_lista.splice(index, 1, actualiza)

    desplegar()
}

const agregar = () => {
    if (tarea_input.value != "") {
        let actividad = {id: Date.now(), tarea: tarea_input.value, realizado: false}
        toda_la_lista.push(actividad)
        tarea_input.value = ""
    } else {
        alert("Debes Escribir una Tarea.")
    }
    desplegar()
}

desplegar()

boton_Agregar.addEventListener("click", () => {agregar()})

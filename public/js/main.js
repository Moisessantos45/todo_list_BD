let tarea = document.querySelector(".input__tarea")
let btn_agregar = document.querySelector(".form__input_submit")
let idCont = document.querySelector(".form__input_id")
let input = document.querySelector(".btn__actions")
let content_tareas = document.querySelector(".content__tareas")
let tarea_list = document.querySelectorAll(".input__tarea_list")
let idTarea=document.querySelectorAll(".id_tarea")
console.log("hijos", content_tareas.childElementCount)

tarea.addEventListener("input", () => {
    let contenido = tarea.value.trim().split("")
    if (contenido.length > 35) {
        console.log("ya te pasaste")
        tarea.classList.add("outline-danger")
    } else {
        tarea.classList.remove("outline-danger")
    }
})

function cont_hijos() {
    idCont.value = content_tareas.childElementCount
    if (content_tareas.childElementCount > 2) {
        input = document.querySelectorAll(".btn__actions")
        varias_tareas(input)
    } else {
        tarea_list = document.querySelector(".input__tarea_list")
        one_tarea(tarea_list)
    }
    if (content_tareas.childElementCount > 10) {
        btn_agregar.type = "buttom"
        btn_agregar.setAttribute("disabled", "disabled")
        tarea.setAttribute("readonly", "readonly");
    }
}

cont_hijos()

function one_tarea(tarea_actual) {
    input.addEventListener("click", e => {
        if (input.value == "EDIT") {
            input.value = "Save"
            input.textContent = "Save"
            input.type = "button"
            tarea_actual.classList.add("outline")
            tarea_actual.removeAttribute("readonly");
        } else {
            input.type = "submit"
            input.value = "EDIT"
            input.textContent = "Edit"
            tarea_actual.classList.remove("outline")
            tarea_actual.setAttribute("readonly", "readonly");
        }
    })
}

function varias_tareas(inputs) {
    inputs.forEach(item => {
        item.addEventListener("click", e => {
            let event = e.target.dataset.id - 1
            console.log(event)
            inputs.forEach((items, p) => {
                if (p == event) {
                    if (items.value == "EDIT") {
                        items.value = "Save"
                        items.textContent = "Save"
                        items.type = "button"
                        tarea_list[event].classList.add("outline")
                        tarea_list[event].removeAttribute("readonly");
                    } else {
                        items.type = "submit"
                        items.value = "EDIT"
                        items.textContent = "Edit"
                        tarea_list[event].classList.remove("outline")
                        tarea_list[event].setAttribute("readonly", "readonly");
                    }
                } else {
                    quitarclase(event)
                    items.value = "EDIT"
                    items.textContent = "Edit"
                    items.type = "button"
                }
            })
        })
    })

}

function quitarclase(posicion) {
    tarea_list.forEach((items, p) => {
        if (p !== posicion) {
            items.classList.remove("outline")
            items.setAttribute("readonly", "readonly");
        } else {
            items.removeAttribute("readonly");
        }
    })
}

function actulizarId() {
    let cont = 1
    idTarea.forEach((items, p) => {
        items.value = cont
        cont++
    })
}

actulizarId()

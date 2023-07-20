import { Tarea } from "../models/tareasList.js"

const paginaInicio= async(req, res) => {
    const tareasBd=await Tarea.findAll()
    console.log(tareasBd)
    res.render("index",{
        pagina:"index",
        tareasBd
    })
}

export{
    paginaInicio
}

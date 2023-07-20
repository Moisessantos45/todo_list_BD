import { Tarea } from "../models/tareasList.js"

const agregarTareas = async (req, res) => {
    const { tarea, tipo, id } = req.body
    console.log("el tipo", tipo)
    try {
        // const ultimoId= await Tarea.findAll({
        //     order:[["id","DESC"]],
        //     limit:1
        // }) || 0
        // const idEnd=ultimoId[0].id || 0
        // console.log("ultomo id",idEnd)
        if (tipo == "Agregar" && id<11) {
            console.log("agregar")
            if (!tarea.trim() == "") {
                console.log("campos llenos")
                await Tarea.create({
                    id,
                    tarea
                })
            } else {
                console.log("campo vacio")
            }
            res.redirect("/")
        } else if (tipo == "EDIT") {
            const actulizarTarea = await Tarea.findOne({
                where: {
                    id: id
                }
            })
            if (!actulizarTarea) {
                res.status(404).json({ mensaje: "no existe la tarea" })
            }
            if (tarea && tarea !== "") {
                actulizarTarea.tarea = tarea
                actulizarTarea.id = id
            }
            try {
                await actulizarTarea.save()
                res.redirect("/")
            } catch (error) {
                console.log(error)
            }
            console.log("guardando")
        } else if (tipo == "DELATE") {
            console.log("eliminando")
            await Tarea.destroy({
                where: {
                    id: id,
                    tarea: tarea
                }
            })
            res.redirect("/")
        }else if(tipo=="Reeset"){
            await Tarea.sync({force:true})
            res.redirect("/")
        }
        console.log(req.body)
    } catch (error) {
        console.log(error)
        res.render("error", {
            pagina: "error",
            mensaje: "Ha ocurrido un error en el servidor"
        })
    }

}

export {
    agregarTareas
}
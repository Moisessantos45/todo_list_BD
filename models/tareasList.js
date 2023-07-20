import Sequelize from "sequelize";
import db from "../config/db.js";

export const Tarea=db.define("tareas",{
    tarea:{
        type:Sequelize.STRING
    }
});


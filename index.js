import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express()
//concetar la base de datos

db.authenticate()
    .then(() => console.log("base de datos conectada"))
    .catch(error => console.log(error))

const port = process.env.PORT || 4000;

app.set("view engine", "pug")

//para leer los datos
app.use(express.urlencoded({extended:true}))

//agregar public
app.use(express.static("public"))
//agregar router
app.use("/", router)
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})
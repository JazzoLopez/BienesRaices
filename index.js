const express = require('express')  //*Extraer la dependencia que hemos descargado

//*Crear la app, esta contiene toda la info de express
const app = express ();

//* Definir un puerto y arrancar nuestro proyecto
//* Soporta metodos HTTP 
//* Routing */
app.get('/', (req, res) =>{
    res.json({msg:"Hola mundo en express"});
})


const port = 3000;

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})
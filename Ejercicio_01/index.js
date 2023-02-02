// Importar nuestras dependencias
import express from "express"
import cookieParser from "cookie-parser"

// Instanciar las dependencias
const app = express();
app.use(cookieParser());

// Definir la ruta "cookies"
app.route('/cookies')
    // Define el metodo POST para generar y guardar una cookie
    .post((req, res) => {
        const {name, value, maxAge} = req.body;
        res.cookie(name, value, { maxAge });
        res.send('Cookie creada exitosamente');
        console.log('¡Cookie creada con exito!')
    })
    // Definir el método GET para devolver todas las cookies
    .get((req, res) =>
    {
        const cookies = req.cookies;
        res.send(cookies);
    })
    // Definir el método DELETE para eliminar una cookie
    /*.delete('/:name', (req, res) => {
        const { name } = req.params;
        res.clearCookie(name);
        res.send(`Cookie "${name}" eliminada`);
    });*/

// Configuramos nuestro servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
})
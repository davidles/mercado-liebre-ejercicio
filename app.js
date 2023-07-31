// Requerir las dependencias
const  express = require('express');
const app = express();
const path = require('path');

// Poner a disposicion el contenido de la carpeta  'public' desde cualquier archivo / ruta
// app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.listen( PORT, () => console.log(`Server up:  PORT:${PORT}`) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/product.html'))
})

app.get('/form', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/form.html'))
})

app.post('/form',  (req,  res) =>{
    res.redirect('/');
})

app.get('/confirmacion', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/confirmacion.html'))
})

app.post('/', (req, res) =>{
    res.redirect('/')
})








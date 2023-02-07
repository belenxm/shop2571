const express = require ('express')
const app = express()
var hbs = require('hbs');
const productos = require('./data/products.json')

const port = 3000


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));


app.get ('/', (req, res) => {
    res.render('index',{
    titulo: "mi shop",
    productos:  productos.products
   }) 
})

app.get('/', (req,res) =>{
    res.render ('index', {
        titulo: "Como comprar"
    })
})

app.get('/como-comprar', (req,res) =>{
    res.render ('como-comprar', {
        titulo: "Como comprar"
    })
})


app.get('/contacto', (req,res) =>{
    res.render ('contacto', {
        titulo: "Contacto"
    })
})


app.get('/producto-detalle', (req,res) =>{
    res.render ('producto-detalle', {
        titulo: "Detalle producto"
    })
})


app.get('/sobre-nosotros', (req,res) =>{
    res.render ('sobre-nosotros', {
        titulo: "Nosotros"
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
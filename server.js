const express = require('express')
const app = express()

const {ApiProducts} = require('./ApiProducts.js')

const { Router } = express

const apiProducts = new ApiProducts();
const routerProducts = new Router()

routerProducts.use(express.json())
routerProducts.use(express.urlencoded({ extended: true }))

routerProducts.get('/',(req,res) =>{
    res.json(apiProducts.allProducts())
})

routerProducts.get('/:id', (req,res)=>{
    res.json(apiProducts.findProduct(req.params.id))
})

routerProducts.delete('/:id', (req,res) =>{
    res.json(apiProducts.deleteById(req.params.id))
})

routerProducts.post('/', (req,res)=>{
    res.json(apiProducts.saveProduct(req.body))
})

app.use(express.static('public'))
app.use('/api/productos', routerProducts)

const server = app.listen(8000, () => console.log('Listen on port 8000'))
server.on("error", error => console.log( `Error en el server ${error}`))

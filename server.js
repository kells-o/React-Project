var Data = require ('../../Data/products.JSON')


let express = require('express')
let app = express()
let data = require ('../../Data/products.JSON')


app.get('/products', function(req, res){

    if(!data){
        res.status(404).send(`Couldn't find the employees`)
    }

    res.send(data)
})

app.get('../../Data/products.JSON/products/:id', function (req,res){

    const sData = data.products.find(function(products){
        console.log(products.id)

        return parseInt(req.params.id) === products.id 
    })

    if(!sData){
        res.status(404).send(`Couldn't find products id`)
    }

    res.send(sData)


})



constport = process.env.PORT || 3002;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})

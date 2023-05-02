const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const countries = require('./Data/country.json')
const chefs = require('./Data/chef.json')
app.use(cors())

app.get('/', (req, res) =>{
    res.send('grand master chef server running')
})

app.get('/countries',(req, res)=>{
    res.send(countries)
})
app.get('/chefs', (req,res)=>{
    res.send(chefs)
})
// 
app.get('/chefs/:id', (req,res)=>{
    const id = req.params.id;
    const selectedChefs = chefs.find(chef => chef.code === id)
    res.send(selectedChefs)
})
app.get('/countries/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    if (id == 0) {
        res.send(chefs)
    }
    const countriesChef = chefs.filter(c =>c.id == id)
    res.send(countriesChef)
})
// 
app.listen(port, () => {
    console.log(`chef api is running on port ${port}`);
})
const express = require("express");

const app = express();
const PORT = 3000;

const products = [
    {
        id:0,
        article: 'Jeans'
    },
    {
        id:1,
        article: 'Trouser'
    },
    {
        id:2,
        article: 'Polo'
    },
    {
        id:3,
        article: 'Casual'
    },
    {
        id:4,
        article: 'Cotton'
    },
    {
        id:5,
        article: 'Dress'
    },
    {
        id:6,
        article: 'Track Suit'
    }

]

app.get("/", (req, res) => {
  res.send("Jeans and T-Shirts");
});

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:PdId', (req, res) => {
    const PdId = Number(req.params.PdId)
    const product = products[PdId]
    res.status(200).json(product)
})

app.listen(PORT, () => {
  console.log(`lintening at port ${PORT}...`);
});

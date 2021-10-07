const express= require('express')
const app= express()

const product=[{
    id:1,
    name:"Iphone 13 pro max",
    price:9900,
    image:'',
    stars: 4,
    review:'This is an amazing product'
},
{
    id:2,
    name:"Bread",
    price:90,
    image:'',
    stars: 4,
    review:'This is an amazing product'
}]
app.get('/',(req,res)=>{
    //res.send("Welcome")
    res.json({message:"Hey"})

    
})

app.get('/products',(req,res)=>{
    res.json(product)
})
app.listen(8080,()=>{
    console.log("Sever is up")
})
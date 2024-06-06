const express = require('express');
const cors =  require("cors");
require('./db/config');
const user= require('./db/user');
const product = require('./db/product')



const app = express();

app.use(express.json());
app.use(cors());


app.post("/register", async (req,resp)=>{
    let User= new user(req.body);
    let result = await User.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
   
})

app.post("/login", async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email)
    {
        let User =  await user.findOne(req.body).select("-password");
    if(User)
        {
            resp.send(User)
        }
        else{
            resp.send({result: 'no user found'})
        }

    }else{
        resp.send({ result: 'no user found'})
    }
    
})

app.post("/add", async (req,resp)=>{
    let Product = new product(req.body);
    let result = await Product.save(); 
    resp.send(result);

})
app.get("/product", async(req,resp)=>{
    let products = await product.find();
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:'no products found'})
    }
})

app.delete("/product/:id", async (req,resp)=>{
    
    const result = await product.deleteOne({_id:req.params.id}); 
    resp.send(result);

})
app.get("/product/:id", async(req,resp)=>{
    const result = await product.findOne({_id:req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"no record found"})
    }
})
app.put("/product/:id", async(req,resp)=>{
    let result = await product.updateOne(
        { _id: req.params.id },
        { $set : req.body }
    )
    resp.send(result)
})
app.listen(7000)
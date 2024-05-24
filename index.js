import express from "express";

const app = express();

const PORT = 4000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("<div>welcome to my world</div>")
})

app.listen(PORT,()=>{
    console.log(`App is listening to ${PORT}`)
})
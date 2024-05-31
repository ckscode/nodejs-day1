import express from "express";
import fs from 'fs'
import {format} from 'date-fns';
import path from "path";

const app = express();

const PORT = 4000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("<div style=font-size:40px;font-family:Arial,Helvetica,sans-serif;>welcome to my home page</div>")
})

app.post('/create',(req,res)=>{
    let date = format(new Date(),'dd-MM-yyyy-HH-mm-ss');
     const filepath =`Files/${date}.txt`
    fs.writeFileSync(filepath,`${date}`,"utf8");
    res.status(200).send("<div>created successfully</div>")
})

app.get('/read',(req,res)=>{
    let files=fs.readdirSync(`Files`);
    const content =[]
    files.forEach((e)=>{
        content.push(fs.readFileSync(`Files/${e}`,"utf8"))
    })
    res.status(200).json({textFiles:files,content})
})

app.listen(PORT,()=>{
    console.log(`App is listening `)
})
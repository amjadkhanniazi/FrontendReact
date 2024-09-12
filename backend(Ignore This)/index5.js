import express from 'express';
import cors from 'cors';

const App=express();

App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(cors());

let parts=[];

App.get('/parts',(req,res)=>{
    res.json(parts);
})

App.post('/parts/new',(req,res)=>{
    const newPart=req.body;
    parts.push({id: Date.now(),...newPart});
    res.json(parts)
})

App.get('/parts/:id',(req,res)=>{
    const part=parts.filter((e)=>e.id==req.params.id);
    res.json(part)
})

App.delete('/parts/:id',(req,res)=>{
    parts=parts.filter((e)=>e.id != req.params.id);
    res.json(parts)
})


App.listen(5005,()=>console.log('http://localhost:5005'));
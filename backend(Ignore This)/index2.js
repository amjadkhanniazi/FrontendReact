import express from 'express';
import cors from 'cors';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

let MyItems=[];

app.get('/items',(req,res) =>{
    res.json({
        MyItems:MyItems
    })
})


app.post('/items/new',(req,res)=>{
    const newItem=req.body;
    MyItems.push({id: Date.now(), ...newItem});
    res.json({
        message:'New Item Added',
        MyItems
    })
})


app.get('/items/:id',(req,res)=>{
    let item=MyItems.filter((e)=>e.id==req.params.id);
    res.json(item)
})

app.delete('/items/:id',(req,res)=>{
    MyItems=MyItems.filter((e)=>e.id!=req.params.id);
    res.json({
        message:'Item Deleted Successfuly',
        MyItems
    })
})


app.listen(5002,()=>console.log('http://localhost:5002'));
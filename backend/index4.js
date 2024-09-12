import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let vegs = [];

app.get('/vegs', (req, res) => {
    res.json(
        vegs)
})

app.post('/vegs/new',(req,res)=> {
    const newVeg=req.body;
    vegs.push({id: Date.now(),...newVeg});
    res.json({
        message:"New Veg Added",
        vegs
    })
})

app.get('/vegs/:id',(req,res) => {
    const veg=vegs.filter((e)=>e.id==req.params.id);
    res.json(veg)
})


app.delete('/vegs/:id', (req, res) => {
    vegs = vegs.filter((e) => e.id != req.params.id);
    res.json(vegs);
})


app.listen(5004, () => console.log('http://localhost:5004'));

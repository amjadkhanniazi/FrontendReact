import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


let fruits = [];

app.get('/fruits', (req, res) => {
    res.json({ fruits: fruits });
})

app.post('/fruits/new', (req, res) => {
    const newFruit = req.body;
    fruits.push({ id: Date.now(), ...newFruit });
    res.json({
        message: 'Fruits added',
        fruits
    })
})

app.get('/fruits/:id', (req, res) => {
    let item = fruits.filter((e) => e.id == req.params.id);
    res.json(item);
})


app.delete('/fruits/:id', (req, res) => {
    const deletedFruit = fruits.filter((e) => e.id == req.params.id);
    fruits = fruits.filter((e) => e.id != req.params.id)
    res.json({
        deletedFruit: deletedFruit,
        message: 'Remaining Fruits',
        fruits: fruits
    })
})

app.listen(5003, () => console.log('http:localhost:5003'));
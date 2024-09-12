import express from 'express';
import cors from 'cors';
import connectdb from './config/db.js';
import users from './Models/users.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


connectdb();

let todos = [];

app.get('/todos',async (req, res) =>{
    const result=await users.find();
    res.json({
        todos: result
    })
})
// body, params, query, file
app.post('/todos/new', async (req, res) => {
    const newTodo = req.body;
    todos.push({id: Date.now(), ...newTodo });
    const result = await users.create(newTodo);

    res.json({
        message: 'New Todo Created',
        result
    })
})

app.get('/todos/:id',async (req, res) => {
    const result= await users.findById(req.params.id);
    let item = todos.filter((e) => e.id == req.params.id)
    console.log('item: ', item);
    
    res.json({
        result,
        item
    })
})

app.delete('/todos/:id',async (req, res) => {
    const result= await users.findByIdAndDelete(req.params.id);
    todos = todos.filter((e) => e.id != req.params.id)
    res.json({
        result,
        todos
    })
})

app.listen(5000, () => console.log('http://localhost:5000/'))
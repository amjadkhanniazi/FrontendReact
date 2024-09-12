import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

let todos = [];
app.get('/todo', (req, res) => {
    res.json({
        todos: todos
    })
})


app.post('/todo/new', (req, res) => {
    const newTodo = req.body;
    todos.push({ id: Date.now(), ...newTodo });
    res.json({
        message: 'Todo Created',
        todos
    })
})


app.get('/todo/:id', (req, res) => {
    let item = todos.filter((e) => e.id == req.params.id);
    console.log('item: ', item)

    res.json(item)
})


app.delete('/todo/:id', (req, res) => {
    todos = todos.filter((e) => e.id != req.params.id)
    res.json(todos)
})

app.listen(5001, () => console.log('http://localhost:5001'))
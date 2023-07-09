const express = require('express')
const app = express()
const port = 3000

var
var tad=[{id:1,title:"milk",description:"at 9am"
},{id:2,title:"Food",description:"at 11am"}]
// 1.GET /todos - Retrieve all todo items
// Description: Returns a list of all todo items.
// Response: 200 OK with an array of todo items in JSON format.
// Example: GET http://localhost:3000/todos
app.get('/todos', (req, res) => {
  //res.send('Hello World!')
 // res.send(`<h1>${tad[0].title}</h1>`)
   // res.send(tad);
   res.status(200).json(tad);
})
// 2.GET /todos/:id - Retrieve a specific todo item by ID
// Description: Returns a specific todo item identified by its ID.
// Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
// Example: GET http://localhost:3000/todos/123

app.get('/todos/:idd', (req, res) => {
    let idd=req.params.idd;
    var index=tad.findIndex(t=>t.id==idd)
    if(index==-1){
        res.sendStatus(404).send("Not Found");
    }
    else
    res.status(200).json(tad[index]);
  })
//   3. POST /todos - Create a new todo item
//   Description: Creates a new todo item.
//   Request Body: JSON object representing the todo item.
//   Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
//   Example: POST http://localhost:3000/todos
//   Request Body: { "title": "Buy groceries", "completed": false, 
//   description: "I should buy groceries" }

app.post('/todos', (req, res) => {
 var obj=req.params.
 
    res.status(201).json();
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
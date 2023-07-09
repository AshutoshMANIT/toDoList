const express = require('express')

const {v4 : uuidv4} = require('uuid')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.json())
app.use(bodyParser.urlencoded({extended : false}))


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
 //var body=req.body

 console.log(req.body.title);
 const userId = uuidv4()
 let obj=
  {id:userId,title:req.body.title,description:req.body.description};
 tad.push(obj)
    res.status(201).send(userId);
  })

// 4. PUT /todos/:id - Update an existing todo item by ID
//     Description: Updates an existing todo item identified by its ID.
//     Request Body: JSON object representing the updated todo item.
//     Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
//     Example: PUT http://localhost:3000/todos/123
//     Request Body: { "title": "Buy groceries", "completed": true }

app.put('/todos/:id',(req,res)=>{
//console.log("hello world");
let idd=req.params.id;
let index=tad.findIndex(t=>t.id==idd)
console.log(req.body.title);
if(idd==-1){
  console.log("id doesnt exists")
  res.status(404).send("404 Not Found")
}
else{
 let obj=
  {
    id:idd,
    title:req.body.title,
    description:req.body.description
  };
 tad[index]=obj;
 res.status(200).json(obj);
  
}

})
// 5. DELETE /todos/:id - Delete a todo item by ID
//     Description: Deletes a todo item identified by its ID.
//     Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
//     Example: DELETE http://localhost:3000/todos/123

app.delete('/todos/:id', (req, res) => {
  
  let index=tad.findIndex(t=>t.id==req.params.id);
  if(index==-1){
    res.status(404).send("404 not found");
  }
  else{
    let arr1=tad.slice(index+1);
    let arr2=tad.slice(0,index)
    tad=arr1.concat(arr2);
res.status(200).json(tad);
  }
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require("express")
const bodyParser = require('body-parser')
const todoData = require("./data/todoList.json")

const app = express()
const port = 4000

const cors  =require("cors")
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.status(200).json(todoData)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})


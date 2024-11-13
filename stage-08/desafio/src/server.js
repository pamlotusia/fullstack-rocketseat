const express = require("express")

const app = express()

app.use(express.json())

app.post("/users", (req, res)=> {
  const {name, age} = req.body
  res.json({name, age})
})

const PORT = 4444
app.listen(PORT , ()=> console.log(`Server is running on port ${PORT}`))
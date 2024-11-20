const express = require("express")
const routes = require("./routes")
const database = require("./database/sqlite")

const app = express()
app.use(express.json())

app.use(routes)
database()

const PORT = 4444
app.listen(PORT , ()=> console.log(`Server is running on port ${PORT}`))
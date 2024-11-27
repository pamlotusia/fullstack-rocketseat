require("express-async-errors")
const AppError = require("./utils/AppError")

const express = require("express")
const routes = require("./routes")
const database = require("./database/sqlite")

const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.log(error)
  
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

database()


const PORT = 4444
app.listen(PORT , ()=> console.log(`Server is running on port ${PORT}`))
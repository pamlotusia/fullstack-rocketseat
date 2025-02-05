require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const uploadConfig = require('./configs/upload')

const cors = require("cors")
const express = require('express')
const routes = require("./routes")
migrationsRun()


const app = express()
// biblioteca que permite o backend atender às requisições do frontend
app.use(cors())

// definindo para a aplicação o formato de dados que ela vai lidar -> JSON
app.use(express.json())
app.use('/files', express.static(uploadConfig.UPLOAD_FOLDER))

app.use(routes)

app.use((error, request, response, next)=> {
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

});

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

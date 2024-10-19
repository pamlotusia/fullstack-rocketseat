const express = require('express')
const routes = require("./routes")

const app = express()

// definindo para a aplicação o formato de dados que ela vai lidar -> JSON
app.use(express.json())

app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

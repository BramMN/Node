const path = require("path")

const express = require("express")

const homeRoutes = require("./routes/home")
const userRoutes = require("./routes/users")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.use(homeRoutes)
app.use(userRoutes)

app.listen(3000)

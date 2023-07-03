import express from "express";
import  Connection  from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyparser  from "body-parser"

const app = express()
app.use(cors())
app.use(bodyparser.json({extends:true}))
app.use(bodyparser.urlencoded({exports:true}))
app.use('/' , route)

// DATABASE CALLING...
Connection()
const PORT = 8000;


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
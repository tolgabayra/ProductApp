const express = require("express")
const app = express()

const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")


const authRoute = require("./routes/auth")
const taskRoute = require("./routes/task")


dotenv.config()

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("MongoDB Connection Is Successfull!");
    })
    .catch((err) => {
        console.log(err);
    })


app.use(cors({origin: true,credentials: true}))
app.use(express.json());
app.use(helmet())
app.use(morgan("dev"))


app.use("/api/v1/auth", authRoute)
app.use("/api/v1/task", taskRoute)

    
app.listen(process.env.APP_PORT || 8000,() => {
  console.log("Server Is Running...");
})
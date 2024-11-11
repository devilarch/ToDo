const express = require("express")
const app = express()

require("dotenv").config();
//here we checking if env file has port defined or not and If not use 4000 port
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import TODO api
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res) => {
    res.send(`<h1>Hello World!</h1`);
})

/*This file handles the server conection of the app.*/
const express = require("express");
const mongoose = require("mongoose");
const expensesRouter = require("./routes/expensesRouter");

const app = express();

app.use(express.json());


const MONGO_URL = 'mongodb+srv://CheikOmar:Clusterpass@cluster0.hwkofv8.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed! Error:", error);
  });


app.use("/expenses", expensesRouter);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


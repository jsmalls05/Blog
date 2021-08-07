const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/author");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use("/api/author", authRoute);
app.use("/api/users", userRoute);

app.listen("8000", () => {
    console.log(`Backend is running on port 8000`)
});
const express = require("express");
const app = express();
const port = 8000;
const authRoute = require("./server/routes/author")

require("./server/config/mongoose.config");

app.get("/", (req, res) => {
    console.log("Lets get started");
    res.json({ message: "good job" })
})

app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/api/author", authRoute);

app.listen(port, () => console.log(`We're up and running on port: ${port}!`));
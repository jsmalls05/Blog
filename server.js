const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    console.log("Lets get started");
    res.json({ message: "good job" })
})

app.listen(port, () => console.log(`We're up and running on port: ${port}!`));
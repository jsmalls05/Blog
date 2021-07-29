const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/beblog", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("That's what I wanna see!"))
    .catch(err => console.log("Nope try again....", err));
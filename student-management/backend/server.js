const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sms")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/api/students", studentRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(5000, () => console.log("Server running on 5000"));

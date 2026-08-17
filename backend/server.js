const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 CareerConnect Backend Running...");
});

app.post("/login", (req, res) => {

    console.log(req.body);

    res.json({ 
        success: true,
        message: "Login successful",
        data: req.body
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
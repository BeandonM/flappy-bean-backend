require('dotenv').config();
const express = require('express');
const appRoutes = require('./app/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World");
})

app.use('/api/highscores',appRoutes);

app.listen(port, () =>{
    console.log(`Server listening on port ${port}...`);
})

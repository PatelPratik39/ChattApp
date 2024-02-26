const express = require('express');


const app = express();

app.get("/", (req,res) => {
    res.send('Hello MERN!!')
})

app.listen(5001, () => console.log('yes Pratik!!, Server is runing on port 5000'));
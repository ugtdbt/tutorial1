const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        "version": "1.0.0",
        "name":"i am backend application",
        "port": port
    })
});

app.listen(port, () =>{
    console.log(`server is started and listning port ${port}`);
});
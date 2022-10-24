const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;


//Test server running port 
app.listen(port, () => {
    console.log("Server is running on port: ", port);
});
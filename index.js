const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 4100;

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send("Now Server is Running");
})

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c.id = id);
    res.send(selectedCourse);
    console.log(selectedCourse);
})



//Test server running port 
app.listen(port, () => {
    console.log("Server is running on port: ", port);
});
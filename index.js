const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.get("/", (req, res) => {
    res.send("Now Server is Running");
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
})


//Test server running port 
app.listen(port, () => {
    console.log("Server is running on port: ", port);
});
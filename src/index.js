import express from 'express';

const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/v1/user", (req, res) => {
    res.send("Hello Nitin!");
});
app.get("/prince", (req, res) => {
    res.send("Hello prince!");
})

app.get("/hello", (req, res) => {
    res.send("Hello World!");
})

app.get("/hello/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 

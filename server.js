
const express = require("express")
const path = require("path");
const app = express();
const port = 3000;


const hello = {
    msg: "Hello world"
}
const echo = [
    {id: "dog"},
    {id: "cat"},
    {id: "bird"}

]


let list = []


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//app.use(express.urlencoded({extended: false}));


app.get("/hello", (req, res) => {
    res.json(hello)
} )
app.get("/echo/:id", (req, res) => {
    res.json(echo[req.params.id]);
} )
app.post("/sum", (req, res) => {
    let array = req.body.numbers
    let answer = 0;
    for (const value of array) {
        answer += value;
    }
    let back = {
        sum: answer
    }

    res.send(back)
})
app.post("/list", (req, res) => {
    list.push(req.body.text);
    res.send(list)
    console.log(list)
    
})




app.listen(port, () => console.log(`Server listening a port ${port}!`));




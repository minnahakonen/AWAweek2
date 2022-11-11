
const express = require("express")
const path = require("path");
const app = express();
const port = 3000;


const hello = {
    msg: "Hello world"
}
let input = []
let answer2 = {
    list: input
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//app.use(express.urlencoded({extended: false}));


app.get("/hello", (req, res) => {
    res.json(hello)
} )
app.get("/echo/:id", (req, res) => {
    res.json(req.params);
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
    input.push(req.body.text);
    res.send(answer2)
    console.log(answer2)
    
})




app.listen(port, () => console.log(`Server listening a port ${port}!`));




const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://tanyavolyn:IwGHnYSQsAAytnQa@cluster0.umqa1ti.mongodb.net/FormNV?retryWrites=true&w=majority");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const messageSchema = {
    name: String,
    email: String,
    message: String
}

const Message = mongoose.model("MyMessage", messageSchema);

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post('/', (req,res) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + '/answer.html')
})

app.listen(7000, () => {
    console.log('Server is listening an PORT 7000')
})
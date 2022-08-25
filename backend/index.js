const express = require("express")
//import cors from "cors"
const path = require("path")
const mongoose = require("mongoose")

__dirname = path.resolve();
//const bodyParser = require("body-parser")
//const passport = require("passport")
//const passportLocalMongoose = require("passport-local-mongoose")
//const session = require("express-session")
const app = express()
const server = app.listen(3000, () => console.log('Server running on port 3000!'))
app.get('/:name', (req, res) => {
    res.send('your name is ' + req.params.name + '\n');
});

//app.use(express.static("public"))
app.use(express.json())


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/myapp/public/index.html");
});













/*const url = "mongodb://localhost:27017/SRC" //url wrong
mongoose.connect(url).then((ans) => {
    console.log("ConnectedSuccessful")
}).catch((err) => {
    console.log("Error in the Connection")
})*/

const ProjectSchema = new mongoose.Schema({
    projectCode: String,
    projectName: String,
    approval: Boolean,
    resourceApproval: Boolean,
    fundApproval: Boolean,
    closed: Boolean,
    facultyID: String,
    staff: [mongoose.Types.ObjectId],
    sanctionFund: Number,

})



const facultySchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: String,
    userCode: String,
    projects: [mongoose.Types.ObjectId]

});

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: String,
    projects: {
        approve: [mongoose.Types.ObjectId],
    }
})


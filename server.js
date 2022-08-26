//jshint esversion:6
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import lodash from 'lodash';
const _ = { lodash }
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true });

const projectsSchema = new mongoose.Schema({
    projectCode: String,
    projectName: String,
    approval: Boolean,
    resourceApproval: Boolean,
    fundApproval: Boolean,
    closed: Boolean,
    facultyID: String,
    staff: [mongoose.Types.ObjectId],
    sanctionFund: Number,
    startDate: Date,
    endDate: Date,
    status: Number,

})

const Project = mongoose.model("Item", projectsSchema)

//dummy project
const project1 = new Project({
    projectCode: "Fa01",
    projectName: "FaName",
    approval: true,
    resourceApproval: true,
    fundApproval: true,
    closed: false,
    facultyID: "FaID",
    startDate: 18 / 12 / 2022,
    endDate: 20 / 12 / 2022,
    //staff: [],
    sanctionFund: 100000,
    status: 20,
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
        approve: [Project],
    }
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
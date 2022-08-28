
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import lodash from 'lodash';
import cors from 'cors';

const _ = { lodash }
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["POST", "GET", "PUT", "HEAD", "OPTIONS"],
    })
);

mongoose.connect("mongodb://localhost:27017/SRC", { useNewUrlParser: true }, () => { console.log("connected to database") });

const projectsSchema = new mongoose.Schema({
    projectCode: String,
    projectName: String,
    agencyCode: String,
    agencyName: String,
    approval: Boolean,
    resourceApproval: Boolean,
    fundApproval: Boolean,
    closed: Boolean,
    facultyID: String,
    organizationType: String,
    staff: [mongoose.Types.ObjectId],
    sanctionFund: Number,
    startDate: Date,
    endDate: Date,
    status: Number,
    description: String

})

const Project = mongoose.model("Project", projectsSchema)

//dummy project
const project1 = new Project({
    projectCode: "Fa01",
    projectName: "FaName",
    agencyName: "Agency",
    agencyCode: "Number",
    approval: true,
    resourceApproval: true,
    fundApproval: true,
    closed: false,
    facultyID: "FaID",
    startDate: 18 - 12 - 2022,
    endDate: 20 - 12 - 2022,
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
const Faculty = mongoose.model('Faculty', facultySchema);

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: String,
    projects: {
        approve: [projectsSchema],
    },
    faculty: []
})

const Admin = mongoose.model('Admin', adminSchema);





app.get("/created", (req, res, err) => {
    res.send('Server Online!!!!')
})

app.post("/created", (req, res) => {
    console.log("Recieved?");
    console.log("Body:", req.body);
    res.send("request sent")
    //console.log(result)
    // const newProject = await Project.create({
    //     projectCode: req.body.projectCode,
    //     projectName: req.body.projectName,
    //     agencyCode: req.body.agencyCode,
    //     agencyName: req.body.agencyCode,
    //     organizationType: req.body.organizationType,
    //     approval: false,
    //     resourceApproval: false,
    //     fundApproval: false,
    //     closed: false,
    //     facultyID: req.body.facultyID,
    //     staff: [],
    //     sanctionFund: req.body.sanctionFund,
    //     startDate: req.body.startDate,
    //     endDate: req.body.endDate,
    //     status: 0,
    //     description: req.body.description
    // })

    // res.status(200).json(newProject)

});

let port = 3001;
// if (port == null || port == "") {
//     port = 3001;
// }
app.listen(port, function () {
    console.log("Server started on port 3001");
});
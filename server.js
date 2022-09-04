import {
  generateAgencyCode,
  updateProjectStatus,
} from "./Modules/backendModules.js";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import lodash from "lodash";
import cors from "cors";

const _ = { lodash };
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "HEAD", "OPTIONS"],
  })
);

mongoose.connect(
  "mongodb://localhost:27017/SRC",
  { useNewUrlParser: true },
  () => {
    console.log("connected to database");
  }
);

//SCHEMAS
const projectsSchema = new mongoose.Schema({
  projectCode: String,
  projectName: String,
  projectType: String,
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
  description: String,
  sanctionLetter: String, //shld be file
  announcements: [{}],
});

const Project = mongoose.model("Project", projectsSchema);

const facultySchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: String,
  userCode: String,
  principalInvestigatorCode: String,
  details: {
    Department: String,
    Designation: String,
    Email: String,
    ContactNumber: String,
    DateOfJoining: Date,
    Qualifications: String,
    DoB: Date,
    Address: String,
  },
  projects: {
    projectCode: String,
    projectName: String,
    projectType: String,
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
    description: String,
    sanctionLetter: String, //shld be file
    announcements: [{}],
  },
});
const Faculty = mongoose.model("Faculty", facultySchema);

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
  faculty: [mongoose.Types.ObjectId],
  staff: [mongoose.Types.ObjectId],
});

const Admin = mongoose.model("Admin", adminSchema);

const staffSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: String,
  staffCode: String,
  details: {
    Department: String,
    Designation: String,
    Email: String,
    ContactNumber: String,
    DateOfJoining: Date,
    Qualifications: String,
    DoB: Date,
    Address: String,
  },
  projects: [
    {
      projectID: String,
      Salary: Number,
      StartDate: Date,
      EndDate: Date,
    },
  ],
});

const announcementSchema = new mongoose.Schema({
  projectID: String,
  project: mongoose.Types.ObjectId,
  qualifications: String,
  startDate: Date,
  endDate: Date,
  salary: Number,
  FacultyName: String,
  description: String,
});

const Announcement = mongoose.model("Announcement", announcementSchema);

//retrieving data from mongodb
app.post("/pending", async (req, res, next) => {
  /*var pendingProjects = await Project.findOne({}, (err, data) => {
        //console.log("Data:\n" + data)
    })*/
  var pendingProjects = await Project.find({});
  console.log("Pending Projects:\n" + pendingProjects);

  //res.send(pendingProjects)
  //console.log(pendingProjects)
  try {
    return res.status(200).json({
      success: true,
      count: pendingProjects.length,
      data: pendingProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

app.post("/created", (req, res) => {
  console.log("Recieved?");
  //console.log("Body:", req.body);
  res.send("request sent");
  //console.log(result)
  var newProject = new Project({
    projectCode: req.body.projectID,
    projectName: req.body.projectName,
    projectType: req.body.projectType,
    agencyCode: String(generateAgencyCode("User")),
    agencyName: req.body.agencyName,
    organizationType: req.body.organizationType,
    approval: false,
    resourceApproval: false,
    fundApproval: false,
    closed: false,
    facultyID: "ID",
    staff: [],
    sanctionFund: req.body.sanctionValue,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    status: 0,
    description: req.body.descriptionBox,
  });

  console.log(newProject);
  newProject.save();
});

let port = 3001;
// if (port == null || port == "") {
//     port = 3001;
// }
app.listen(port, function () {
  console.log("Server started on port 3001");
});

var newFac = new Faculty({
  username: "CS20B020",
  password: "cs20b020",
  userCode: "CS12",
  principalInvestigatorCode: "CS01",
  details: {
    Department: "CS",
    Designation: "Assistant Professor",
    Email: "cs20b020@iitp.ac.in",
    ContactNumber: "3276456938",
    DateOfJoining: new Date("2020-11-16"),
    Qualifications: "B.Tech",
    DoB: new Date("2001-04-10"),
    Address: "Tirupati",
  },
  projects: {
    projectCode: "123",
    projectName: "SRC",
    projectType: "Internal",
    agencyCode: "College123",
    agencyName: "College",
    approval: true,
    resourceApproval: true,
    fundApproval: true,
    closed: false,
    facultyID: "CS01",
    organizationType: "National",
    //staff: [mongoose.Types.ObjectId],
    sanctionFund: 1010010,
    startDate: new Date("2001-04-10"),
    endDate: new Date("2007-04-10"),
    status: 0,
    description: "String",
    sanctionLetter: "String",
  },
});
newFac.save();
console.log(newFac);
var s1 = "CS01";
var s2 = "123";
var n1 = 1;
updateProjectStatus(s1, s2, n1);
console.log(newFac);

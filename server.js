import {
  generateAgencyCode,
  projectCode,
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
var conn = mongoose.connection;
<<<<<<< HEAD
conn.on("connected", function () {
  console.log("database is connected successfully");
=======
conn.on('connected', function () {
  console.log('database is connected successfully!');
>>>>>>> 76f096a53cbd9b00200e46afe6d33c1bc27ecc1d
});

//-----------------------------------------------------------------------------
//SCHEMAS
//-----------------------------------------------------------------------------

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
  staff: [String],
  sanctionFund: Number,
  startDate: Date,
  endDate: Date,
  status: Number,
  description: String,
  sanctionLetter: String, //shld be file
  announcements: [String],
  staffRecruitment: [{}],
});

const Project = mongoose.model("Project", projectsSchema);

//facultySchema
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
  projects: [String],
  sanctionLetter: String, //shld be file
});
const Faculty = mongoose.model("Faculty", facultySchema);

//dummy faculty

var newFac = new Faculty({
  username: "faculty",
  password: "faculty",
  userCode: "fac00",
  principalInvestigatorCode: "FAC0",
  details: {
    Department: "CS",
    Designation: "Associate Professor",
    Email: "faculty@iitp.ac.in",
    ContactNumber: "3276456938",
    DateOfJoining: new Date("2018-11-16"),
    Qualifications: "B.Tech",
    DoB: new Date("1986-04-10"),
    Address: "Tirupati",
  },
  projects: [],
});
newFac.save();

//admin Schema
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
  recruitment: {
    project: mongoose.Types.ObjectId,
    numberOfStaff: Number,
    salary: Number,
    startDate: Date,
    endDate: Date,
    reasonForRecruitment: String,
    approve: Boolean,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

//staffSchema
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
  projectName: String,
  projectID: String,
  projectType: String,
  salaryDetails: Number,
  openPositions: String,
  requiredQualifications: String,
  startDate: Date,
  endDate: Date,
});

const Announcement = mongoose.model("Announcement", announcementSchema);

//--------------------------------------------------------------------------------------------
//Login Authentication
//---------------------------------------------------------------------------------------------
//returns data to faculty ongoing projects
app.post("/verifyFacultyLogin", async (req, res, next) => {
  var verify = await Faculty.find({ username: req.body.username });
  console.log(verify);

  try {
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//---------------------------------------------------------------------------------------------
//Functions to send data to front end
//---------------------------------------------------------------------------------------------

//returns data to admin pending approvals
app.post("/pendingApprovals", async (req, res, next) => {
  var pendingApproval = await Project.find({ approval: false });

  try {
    return res.status(200).json({
      success: true,
      count: pendingApproval.length,
      data: pendingApproval,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to faculty ongoing projects
app.post("/ongoing", async (req, res, next) => {
  var ongoingProjects = await Project.find({ approval: true, closed: false });
  //console.log("Ongoing Projects:\n" + ongoingProjects);

  try {
    return res.status(200).json({
      success: true,
      count: ongoingProjects.length,
      data: ongoingProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to faculty pending projects
app.post("/pending", async (req, res, next) => {
  var pendingProjects = await Project.find({ approval: false });
  //console.log("Pending Projects:\n" + pendingProjects);

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

//returns data to faculty ongoing projects
app.post("/completed", async (req, res, next) => {
  var ongoingProjects = await Project.find({ approval: true, closed: true });
  console.log("Ongoing Projects:\n" + ongoingProjects);

  try {
    return res.status(200).json({
      success: true,
      count: ongoingProjects.length,
      data: ongoingProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to faculty ongoing projects
app.post("/sendRecruitment", async (req, res, next) => {
  var ongoingProjects = await Project.find({ approval: true, closed: true });
  //console.log("requestRecruitment:\n" + ongoingProjects);

  try {
    return res.status(200).json({
      success: true,
      count: ongoingProjects.length,
      data: ongoingProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//---------------------------------------------------------------------
//functions to save data to backend database
//---------------------------------------------------------------------

//save newProject data into database from create Project
app.post("/created", (req, res) => {
  console.log("Recieved?");
  res.send("request sent");
  var newProject = new Project({
    projectCode: Math.random().toString(), //temporarily assign random value to the project
    projectName: req.body.projectName,
    projectType: req.body.projectType,
    agencyCode: String(generateAgencyCode(req.body.agencyName)),
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
  //console.log(newProject);
  newProject.save();
});

//save announcement
app.post("/announced", (req, res) => {
  console.log("Recieved?");
  res.send("request sent");
  var newAnnouncement = new Announcement({
    projectName: req.body.projectName,
    projectID: req.body.projectID,
    projectType: req.body.projectType,
    salaryDetails: req.body.salaryDetails,
    openPositions: req.body.openPositions,
    requiredQualifications: req.body.requiredQualifications,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  newAnnouncement.save();
});

//save details of Recruitment request
app.post("/saveRecruitment", (req, res) => {
  console.log("saving Recruitment?");
});

//----------------------------------------------------------------------------
//updating values in data base
//----------------------------------------------------------------------------

//update pending approval status in admin
app.post("/updateProjectApprovalStatus", async (req, res, next) => {
  await Project.findByIdAndUpdate(req.body.id, {
    approval: true,
    projectCode: projectCode(req.body.facultyID),
  });

  var updateApproval = await Project.find({
    _id: req.body.id,
    facultyID: req.body.facultyID,
  });
  //console.log(updateApproval)

  try {
    return res.status(200).json({
      success: true,
      count: updateApproval.length,
      data: updateApproval,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//update project status in faculty projects
app.post("/updateProjectStatus", async (req, res, next) => {
  await Project.findByIdAndUpdate(req.body._id, { status: req.body.status });

  try {
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//----------------------------------------------------------------------------
//setting up a port
//----------------------------------------------------------------------------

let port = 3001;
app.listen(port, function () {
  console.log("Server started on port 3001");
});

//---------------------------------------------------------------------------------

//testing
/*var newFac = new Faculty({
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
console.log(newFac);*/

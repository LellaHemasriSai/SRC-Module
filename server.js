import { generateAgencyCode, projectCode } from "./Modules/backendModules.js";
import {
  Project,
  Faculty,
  Staff,
  Admin,
  Announcement,
  RecruitmentRequest,
  FundsRequest,
  Indent,
  DurationExtension,
} from "./Modules/Schema.js";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import lodash from "lodash";
import cors from "cors";
import path from "path";
import crypto from "crypto";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import methodOverride from "method-override";
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
conn.on("connected", function () {
  console.log("database is connected successfully!");
});

let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: "mongodb://localhost:27017/SRC",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

//--------------------------------------------------------------------------------------------
//Dummy users
//--------------------------------------------------------------------------------------------

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
    Gender: "Male",
  },
  projects: [],
});
newFac.save();
//console.log(Faculty.findOne({ 'username': 'faculty' }))

//dummy Admin
let newAdmin = new Admin({
  username: "admin",
  password: "admin",
  projects: {
    approve: [],
  },
  faculty: [],
  staff: [],
  details: {
    Department: "Administration",
    Designation: "ERP Manager",
    Email: "erp.manager@iittp.ac.in",
    ContactNumber: "0000000000",
    DateOfJoining: new Date("2017-09-19"),
    Qualifications: "MBA, B.Sc - Computers",
    DoB: new Date("1990-10-18"),
    Address: "Chennai, Metropolitan Area",
    Gender: "Male",
  },
});
newAdmin.save();

//dummy staff object
let newStaff = new Staff({
  username: "student",
  password: "student",
  staffCode: "stu00",
  details: {
    Department: "AI",
    Designation: "Student",
    Email: "student@iittp.ac.in",
    ContactNumber: "0101017878",
    DateOfJoining: new Date("2020-06-19"),
    Qualifications: "class 12, B-Tech",
    DoB: new Date("2002-12-18"),
    Address: "Tirupati, Andhra Pradesh",
  },
  projects: [],
});
newStaff.save();

//--------------------------------------------------------------------------------------------
//Login Authentication
//--------------------------------------------------------------------------------------------

//variable to store current user information - default is set to faculty for current presentation
var user = "faculty";

//returns data to admin login
app.post("/verifyAdminLogin", async (req, res, next) => {
  var verify = await Admin.find({ username: req.body.username });
  var verificationStatus = verify.length > 0 ? true : false;
  user = req.body.username;

  try {
    return res.status(200).json({
      success: verificationStatus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to faculty Login
app.post("/verifyFacultyLogin", async (req, res, next) => {
  var verify = await Faculty.find({ username: req.body.username });
  var verificationStatus = verify.length > 0 ? true : false;
  user = req.body.username;

  try {
    return res.status(200).json({
      success: verificationStatus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to Staff Login
app.post("/verifyStaffLogin", async (req, res, next) => {
  var verify = await Staff.find({ username: req.body.username });
  var verificationStatus = verify.length > 0 ? true : false;
  user = req.body.username;

  try {
    return res.status(200).json({
      success: verificationStatus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//---------------------------------------------------------------------------------------------
//Functions to send data to front end
//---------------------------------------------------------------------------------------------

//returns recruitment to admin
app.post("/sendRecruitmentApprovals", async (req, res, next) => {
  var approvals = await RecruitmentRequest.find({
    active: true,
    approval: false,
  });
  try {
    return res.status(200).json({
      success: true,
      count: approvals.length,
      data: approvals,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns Announcements to Staff / Student page
app.post("/sendAnnouncements", async (req, res, next) => {
  var announcements = await Announcement.find({ active: true });
  //console.log(announcements)
  try {
    return res.status(200).json({
      success: true,
      count: announcements.length,
      data: announcements,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to faculty Home Page
app.post("/sendFacultyDetails", async (req, res, next) => {
  var details = await Faculty.findOne({ username: user });

  try {
    return res.status(200).json({
      success: true,
      data: details,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to Admin Home Page
app.post("/sendAdminDetails", async (req, res, next) => {
  var details = await Admin.findOne({ username: user });

  try {
    return res.status(200).json({
      success: true,
      data: details,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns data to Student Home Page
app.post("/sendStaffDetails", async (req, res, next) => {
  var details = await Staff.findOne({ username: "student" });
  try {
    return res.status(200).json({
      success: true,
      data: details,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

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
  var completedProjects = await Project.find({ approval: true, closed: true });
  //console.log("completed Projects:\n" + completedProjects);

  try {
    return res.status(200).json({
      success: true,
      count: completedProjects.length,
      data: completedProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns recruitment data to admin
app.post("/sendRecruitment", async (req, res, next) => {
  var rec = await RecruitmentRequest.find({ approval: false, active: true });

  try {
    return res.status(200).json({
      success: true,
      data: rec,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns duration extension data to admin
app.post("/sendDurationExtension", async (req, res, next) => {
  var rec = await DurationExtension.find({ approval: false, active: true });

  try {
    return res.status(200).json({
      success: true,
      data: rec,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns additional funds request data to admin
app.post("/sendFundsRequest", async (req, res, next) => {
  var fund = await FundsRequest.find({ approval: false, active: true });
  // console.log(fund.length);
  try {
    return res.status(200).json({
      success: true,
      data: fund,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//returns indent data to faculty items page
app.post("/sendIndentDetails", async (req, res, next) => {
  var indent = await Indent.find({ projectCode: req.body.projectCode });

  try {
    return res.status(200).json({
      success: true,
      data: indent,
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
    noOfStaff: 0,
    description: req.body.descriptionBox,
  });
  //console.log(newProject);
  newProject.save();
});

//save announcement
app.post("/announced", (req, res) => {
  console.log("Received?");
  res.send("request sent");
  var project = Project.findOne({ projectCode: req.body.projectCode });
  var newAnnouncement = new Announcement({
    projectName: req.body.projectName,
    projectID: req.body.projectID,
    projectType: req.body.projectType,
    salaryDetails: req.body.salaryDetails,
    openPositions: req.body.openPositions,
    requiredQualifications: req.body.requiredQualifications,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: project.description,
    active: true,
  });
  //console.log(newAnnouncement)
  newAnnouncement.save();
});

//save details of Recruitment request
app.post("/saveRecruitmentRequest", async (req, res) => {
  console.log("saving Recruitment?");
  res.send("request sent");
  var project = await Project.findOne({ projectCode: req.body.projectID });
  var newRequest = new RecruitmentRequest({
    projectID: req.body.projectID,
    //projectName: await Project.findOne({ 'projectCode': req.body.projectID }).projectName,
    projectName: req.body.projectName,
    recruitmentType: req.body.recruitmentType,
    numberOfStaff: req.body.no_ofStaff,
    salaryDetails: req.body.salaryDetails,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    active: true,
    approval: false,
    description: req.body.descriptionBox,
    status: project.status,
    facultyID: project.facultyID,
  });
  //console.log(newRequest);
  newRequest.save();
  // console.log(newRequest.projectName);
});

//save details of Extend Duration request
app.post("/saveExtendDurationRequest", async (req, res) => {
  console.log("saving Extend Duration?");
  res.send("request sent");
  var project = await Project.findOne({ projectCode: req.body.projectID });
  var newRequest = new DurationExtension({
    projectID: req.body.projectID,
    projectName: req.body.projectName,
    projectType: req.body.projectType,
    prevDate: req.body.previousDate,
    newDate: req.body.extendDate,
    active: true,
    approval: false,
    descriptionBox: req.body.descriptionBox,
    status: project.status,
    facultyID: project.facultyID,
  });
  //console.log(newRequest);
  newRequest.save();
  //console.log(newRequest.projectName);
});

//save details of Additional funds request
app.post("/saveFundRequest", async (req, res) => {
  console.log("saving Additional Funds?");
  res.send("request sent");
  var project = await Project.findOne({ projectCode: req.body.projectID });
  //console.log(project.status)
  var newRequest = new FundsRequest({
    projectID: req.body.projectID,
    projectName: req.body.projectName,
    prevSanctionValue: req.body.prevsanctionValue,
    extendSanctionValue: req.body.extendsanctionValue,
    active: true,
    approval: false,
    descriptionBox: req.body.descriptionBox,
    status: project.status,
    facultyID: project.facultyID,
  });
  //console.log(newRequest);
  newRequest.save();
  // console.log(newRequest.projectName);
});

//save Indent details of a project
app.post("/saveIndentDetails", (req, res) => {
  console.log("saving Indent Details!");
  res.send("request sent");
  var newRequest = new Indent({
    projectCode: req.body.projectCode,
    itemName: req.body.item,
    cost: req.body.cost,
    retailerName: req.body.name,
    description: req.body.description,
  });
  //console.log(newRequest);
  newRequest.save();
  // console.log(newRequest.projectName);
});

//----------------------------------------------------------------------------
//updating values in data base
//----------------------------------------------------------------------------

//update fund approval status in admin
app.post("/updateFundApproval", async (req, res, next) => {
  const fund = await FundsRequest.findByIdAndUpdate(req.body.id, {
    approval: req.body.approveStatus,
    active: false,
  });
  //console.log(fund);-->null
  await Project.findOneAndUpdate(
    { projectCode: req.body.projectCode },
    {
      fundApproval: true,
      sanctionFund: fund.extendSanctionValue,
    }
  );

  var updateApproval = await Project.find({
    projectCode: req.body.projectCode,
  });
  console.log(updateApproval);

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

//update duration extension approval status in admin
app.post("/updateDurationApprovalStatus", async (req, res, next) => {
  await DurationExtension.findByIdAndUpdate(req.body.id, {
    approval: req.body.approveStatus,
    active: false,
  });

  const approve = await DurationExtension.findOne({ _id: req.body.id });

  //console.log(approve);-->null
  await Project.findOneAndUpdate(
    { projectCode: req.body.projectCode },
    {
      endDate: approve.newDate,
    }
  );

  var updateApproval = await Project.find({
    projectCode: req.body.projectCode,
  });

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

//update recruitment approval status in admin
app.post("/updateRecruitmentApprovalStatus", async (req, res, next) => {
  const recruit = await RecruitmentRequest.findByIdAndUpdate(req.body.id, {
    approval: req.body.approveStatus,
    active: false,
  });

  await Project.findOneAndUpdate(req.body.projectCode, {
    resourceApproval: true,
  });

  var updateApproval = await Project.find({
    projectCode: req.body.projectCode,
  });

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

//update pending approval status in admin
app.post("/updateProjectApprovalStatus", async (req, res, next) => {
  await Project.findByIdAndUpdate(req.body.id, {
    approval: req.body.status,
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
  if (req.body.status == 100) {
    await Project.findByIdAndUpdate(req.body._id, { closed: true });
  }
  try {
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//update faculty details from Details form
app.post("/updateFacultyDetails", async (req, res, next) => {
  const fac = await Faculty.findOne({ username: user });
  const id = fac.id;
  await Faculty.findByIdAndUpdate(id, { details: req.body.details });
  //console.log(Faculty.findOne({ 'username': 'faculty' }))

  try {
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//update admin details from Details form
app.post("/updateAdminDetails", async (req, res, next) => {
  const admin = await Admin.findOne({ username: user });
  const id = admin.id;
  await Admin.findByIdAndUpdate(id, { details: req.body.details });
  //console.log(Faculty.findOne({ 'username': 'faculty' }))

  try {
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//update Student details from Details form
app.post("/updateStudentDetails", async (req, res, next) => {
  const student = await Staff.findOne({ username: user });
  const id = student.id;
  await Staff.findByIdAndUpdate(id, { details: req.body.details });
  //console.log(Faculty.findOne({ 'username': 'faculty' }))

  try {
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

//update student application in student - on pressing apply now
app.post("/updateOpportunitiesApplyNow", async (req, res, next) => {
  console.log("announcements - apply now");
  console.log(req.body);
  var obj = await Staff.findOneAndUpdate(
    { username: req.body.staffName },
    { $push: { projects: req.body.projectID } }
  );
  console.log(obj);
  console.log(obj.projects);
  try {
    return res.status(200).json({
      success: true,
      //data: updateApproval,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

// app.post("updateStaffIDinAnnouncements", async (req, res, next) => {
//   console.log(req.body.id);
//   var obj = await Announcement.findOneAndUpdate(
//     { username: req.body.staffName },
//     { $push: { Applications: req.body.staffCode } }
//   );
//   console.log(obj.Applications);
// });

//----------------------------------------------------------------------------
//setting up the port
//----------------------------------------------------------------------------

let port = 3001;
app.listen(port, function () {
  console.log("Server started on port 3001");
});

//---------------------------------------------------------------------------------
//                                      END
//---------------------------------------------------------------------------------

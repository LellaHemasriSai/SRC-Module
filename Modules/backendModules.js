import { MongoClient } from "mongodb";
import multer from "multer";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/SRC";
const client = new MongoClient(uri);

//map agency name and code in data base, if new agency add to the mapping else return the existing code.
//Issue: when agencies have same 1st 3 letters and length.
export function generateAgencyCode(agencyName) {
  return agencyName.toUpperCase().substring(0, 3) + agencyName.length;
}

//function to modify agency code in data base, fetch agency form mongodb, search and update it.
export function modifyAgencyCode(agencyCode) {}

export function projectCode(facultyID) {
  return (
    facultyID.toUpperCase().substring(0, 2) +
    String(Math.floor(Math.random() * (999 - 100 + 1) + 100))
  );
}

export function updateProjectStatus(facultyID, projectID, status) {
  //search fauculty data base for faculty id
  //search for project with project id
  //set status in the respective project
  //var mongo = require("mongodb");
  const db = client.db("faculties");
  db.collection("faculties.projects").updateOne(
    { facultyID: facultyID, projectCode: projectID },
    { $set: { status: status } }
  );
  console.log("update Status successful!");
}

export function updateProjectDuration(facultyID, projectID, newDuration) {
  //search faculty data base for faculty id
  //search for project with project id
  //update duration to the new duration
  console.log("project Duration updated!");
}

export function updateFunds(facultyID, projectID, additionalFunds) {
  //search faculty data base for faculty id
  //search for project with project id
  //add additionalFunds to old Funds
  console.log("additionalFunds updated!");
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "scannedSignatures");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString.replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: filefilter });
const singleFileUpload = async (req, res, next) => {
  try {
    const file = {
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSIzeFormatter(req.file.size, 2),
    };
    await file.save();
    res.status(201).send("File Uploaded Successfully!!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const fileSIzeFormatter = (bytes, decimal) => {
  if (bytes == 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};
export default { upload, singleFileUpload, fileSIzeFormatter };

import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/SRC";
const client = new MongoClient(uri);

//map agency name and code in data base, if new agency add to the mapping else return the existing code.
//Issue: when agencies have same 1st 3 letters and length.
export function generateAgencyCode(agencyName) {
  return agencyName.toUpperCase().substring(0, 3) + agencyName.length;
}

//function to modify agency code in data base, fetch agency form mongodb, search and update it.
export function modifyAgencyCode(agencyCode) { }

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

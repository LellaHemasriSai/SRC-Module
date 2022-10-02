import mongoose from "mongoose";

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
    noOfStaff: Number,
    sanctionFund: Number,
    startDate: Date,
    endDate: Date,
    status: Number,
    description: String,
    sanctionLetter: String, //shld be file
    announcements: [String],
    staffRecruitment: [{}],
    items: [],
  });
  
  export const Project = mongoose.model("Project", projectsSchema);
  
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
      Gender: String,
      Signature: [
        {
          fileName: String,
          filePath: String,
          fileType: String,
          fileSize: String,
        },
      ],
    },
    projects: [String],
    sanctionLetter: String, //shld be file
  });
  export const Faculty = mongoose.model("Faculty", facultySchema);
  
  
  
  //admin Schema
  const adminSchema = new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      required: true,
    },
    password: String,
    projects: {
      approve: [String],
    },
    faculty: [String],
    staff: [String],
    recruitment: {
      project: String,
      numberOfStaff: Number,
      salary: Number,
      startDate: Date,
      endDate: Date,
      reasonForRecruitment: String,
      approve: Boolean,
    },
    details: {
      Department: String,
      Designation: String,
      Email: String,
      ContactNumber: String,
      DateOfJoining: Date,
      Qualifications: String,
      DoB: Date,
      Address: String,
      Gender: String,
    },
  });
  
  export const Admin = mongoose.model("Admin", adminSchema);
  
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
    projects: [],
  });
  
  export const Staff = mongoose.model("Staff", staffSchema);
  
  
  
  //announcement Schema
  const announcementSchema = new mongoose.Schema({
    projectName: String,
    projectID: String,
    projectType: String,
    salaryDetails: Number,
    openPositions: String,
    requiredQualifications: String,
    startDate: Date,
    endDate: Date,
    active: Boolean,
    description: String,
    facultyName: String,
    Applications: [String],
  });
  
  export const Announcement = mongoose.model("Announcement", announcementSchema);
  
  //Recruitment details schema
  const recruitmentRequestSchema = new mongoose.Schema({
    projectID: String,
    recruitmentType: String,
    numberOfStaff: Number,
    salaryDetails: Number,
    startDate: Date,
    endDate: Date,
    active: Boolean,
    description: String,
    approval: Boolean,
    projectName: String,
    facultyID: String,
    status: Number,
  });
  
  export const RecruitmentRequest = mongoose.model(
    "RecruitmentRequest",
    recruitmentRequestSchema
  );
  
  //fund extension data schema
  const fundsRequestSchema = new mongoose.Schema({
    projectID: String,
    projectType: String,
    prevSanctionValue: Number,
    extendSanctionValue: Number,
    active: Boolean,
    descriptionBox: String,
    approval: Boolean,
    projectName: String,
    facultyID: String,
    status: Number,
  });
  
  export const FundsRequest = mongoose.model("FundsRequest", fundsRequestSchema);
  
  //duration extension schema
  const durationExtensionSchema = new mongoose.Schema({
    projectID: String,
    projectType: String,
    numberOfStaff: Number,
    prevDate: Date,
    newDate: Date,
    active: Boolean,
    description: String,
    approval: Boolean,
    projectName: String,
    descriptionBox: String,
    facultyID: String,
    status: Number,
  });
  
  export const DurationExtension = mongoose.model(
    "DurationExtension",
    durationExtensionSchema
  );
  
  //ident details schema
  const indentSchema = new mongoose.Schema({
    projectCode: String,
    itemName: String,
    cost: Number,
    retailerName: String,
    description: String,
  });
  
  export const Indent = mongoose.model("Indent", indentSchema);
  
  //Test code for saving files
  
  // const scannedSignaturesSchema = new mongoose.Schema({
  //   fileName: String,
  //   filePath: String,
  //   fileType: String,
  //   fileSize: String,
  // });
  
  // const ScannedSignatures = mongoose.model(
  //   "ScannedSignatures",
  //   scannedSignaturesSchema
  // );
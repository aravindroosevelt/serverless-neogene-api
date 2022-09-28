const Program = require("./Program");
const Process = require("./Process");
const FunctionalGrp = require("./FunctionalGroup");
const Study = require("./Study");
const { db } = require("../db");
const Investigator = require("./Investigator");
const Tasks = require("./Tasks");
const ClinicalSite = require("./ClinicalSite");
const Subject = require("./Subject");
const StudySiteSubject = require("./StudySiteSubject");
const Operator = require("./Operator");
const StudySubjectTasks = require("./StudySubjectTasks");
const PatientProduct = require("./PatientProduct");
const EventLog = require("./Eventlog");

Program.hasMany(Study, {
    foreignKey: "ProgramID",
});
Study.belongsTo(Program, {
    foreignKey: "ProgramID",
});

//one to one relation
Process.hasMany(Tasks, {
    foreignKey: "ProcessID",
});
Tasks.belongsTo(Process, {
    foreignKey: "ProcessID",
});
FunctionalGrp.hasMany(Tasks, {
    foreignKey: "FuncGrpID",
});
Tasks.belongsTo(FunctionalGrp, {
    foreignKey: "FuncGrpID",
});

ClinicalSite.hasMany(Investigator, {
    foreignKey: "ClinicalSiteID",
});
Investigator.belongsTo(ClinicalSite, {
    foreignKey: "ClinicalSiteID",
});

Study.hasMany(StudySiteSubject, {
    foreignKey: "StudyID",
});
StudySiteSubject.belongsTo(Study, {
    foreignKey: "StudyID",
});

ClinicalSite.hasMany(StudySiteSubject, {
    foreignKey: "ClinicalSiteID",
});
StudySiteSubject.belongsTo(ClinicalSite, {
    foreignKey: "ClinicalSiteID",
});

Subject.hasMany(StudySiteSubject, {
    foreignKey: "SubjectID",
});
StudySiteSubject.belongsTo(Subject, {
    foreignKey: "SubjectID",
});

FunctionalGrp.hasMany(Operator, {
    foreignKey: "FuncGrpID",
});
Operator.belongsTo(FunctionalGrp, {
    foreignKey: "FuncGrpID",
});

StudySiteSubject.hasMany(StudySubjectTasks, {
    foreignKey: "StudySubjectID",
});
StudySubjectTasks.belongsTo(StudySiteSubject, {
    foreignKey: "StudySubjectID",
});

Tasks.hasMany(StudySubjectTasks, {
    foreignKey: "TaskID",
});

StudySubjectTasks.belongsTo(Tasks, {
    foreignKey: "TaskID",
});

StudySiteSubject.hasMany(PatientProduct, {
    foreignKey: "StudySubjectID",
});
PatientProduct.belongsTo(StudySiteSubject, {
    foreignKey: "StudySubjectID",
});

Tasks.hasMany(PatientProduct, {
    foreignKey: "TaskID",
});
Tasks.belongsTo(Tasks, {
    foreignKey: "TaskID",
});

StudySubjectTasks.hasMany(EventLog, {
    foreignKey: "StudySubTaskID",
});
EventLog.belongsTo(StudySubjectTasks, {
    foreignKey: "StudySubTaskID",
});

Operator.hasMany(EventLog, {
    foreignKey: "OperatorID",
});
EventLog.belongsTo(Operator, {
    foreignKey: "OperatorID",
});

PatientProduct.hasMany(EventLog, {
    foreignKey: "patientproductID",
});
EventLog.belongsTo(PatientProduct, {
    foreignKey: "patientproductID",
});

// db.sync({ force: true }).then(() => console.log("Done!"));

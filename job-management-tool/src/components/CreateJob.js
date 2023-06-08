import { getDatabase, ref, set } from "firebase/database";

function writeJobData(id, appDate, appID, company, followUpDate, jobID, jobLink, position, status) {
  const db = getDatabase();
  set(ref(db, 'jobApplications/' + id), {
    id: id,
    appDate: appDate,
    appID : appID,
    company: company,
    followUpDate: followUpDate,
    jobID: jobID,
    jobLink: jobLink,
    position: position,
    status: status
  });
}
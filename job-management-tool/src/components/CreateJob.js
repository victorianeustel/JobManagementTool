import { getDatabase, ref, set } from "firebase/database";

export default function writeJobData(appDate, appID, company, followUpDate, jobID, jobLink, position, status) {
  const db = getDatabase();
  set(ref(db, 'jobApplications/' + position + '-' + company), {
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
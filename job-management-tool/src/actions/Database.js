import { getDatabase, ref, push } from "firebase/database";

export function writeJobData(appDate, appID, company, followUpDate, jobID, jobLink, position, status, jobDescription, notes) {
    const db = getDatabase();
    push(ref(db, 'jobApplications/'), {
        appDate: appDate,
        appID: appID,
        company: company,
        followUpDate: followUpDate,
        jobID: jobID,
        jobLink: jobLink,
        position: position,
        status: status,
        jobDescription: jobDescription,
        notes: notes
    });
};
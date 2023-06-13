import { getDatabase, ref, push, update } from "firebase/database";

export function writeJobData(appDate, appID, company, followUpDate, jobID, jobLink, position, status, jobDescription, notes, interviewQuestions, keywords) {
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
        notes: notes,
        interviewQuestions: interviewQuestions,
        keywords: keywords
    });
};

export function updateJob(id, interviewQuestions, keywords) {
    const db = getDatabase();
    update(ref(db, 'jobApplications/' + id), {
        interviewQuestions: {
            "1": `${interviewQuestions[0]}`,
            "2": `${interviewQuestions[1]}`,
            "3": `${interviewQuestions[2]}`,
            "4": `${interviewQuestions[3]}`,
            "5": `${interviewQuestions[4]}`
        },
        keywords: {
            "1": `${keywords[1]}`,
            "2": `${keywords[2]}`,
            "3": `${keywords[3]}`,
            "4": `${keywords[4]}`,
            "5": `${keywords[5]}`,
            "6": `${keywords[6]}`,
            "7": `${keywords[7]}`,
            "8": `${keywords[8]}`,
            "9": `${keywords[9]}`,
            "10": `${keywords[10]}`
        }
    });

    // A post entry.
    // const postData = {
    //   keywords: keywords,
    //   interviewQuestions: interviewQuestions
    // };

    // Write the new post's data simultaneously in the posts list and the user's post list.
    // const updates = {};
    // updates['/jobApplications/' + id ] = postData;

    // firebase.database().ref().child('/jobApplications/' + id).update({
    //     keywords: keywords, interviewQuestions: interviewQuestions 
    // });
    // return update(ref(db), updates);
}
import { getDatabase, ref, push, update, get } from "firebase/database";
import { onValue } from "firebase/database";

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
}

export function getJobData() {
    const db = getDatabase();
    const dbRef = ref(db, 'jobApplications');
    onValue(dbRef, (snapshot) => {
        const records = [];
        snapshot.forEach(childSnapshot => {
          const keyName = childSnapshot.key;
          const data = childSnapshot.val();
          records.push({ "key": keyName, "data": data });
        });
        return records;
      });
}

export const getData = (entry) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const ref = databaseRef(database, entry);
      onValue(ref, (snapshot) => {
        const array = [];
        // For each data in the entry
        snapshot.forEach((el) => {
          // Push the object to the array
          // If you also need to store the unique key from firebase,
          // You can use array.push({ ...el.val(), key: el.key });
          array.push(el.val());
        });
        setData(array);
      });
      // Clean-up function
      return () => off(ref);
    }, [entry]);
  
    return data;
  };
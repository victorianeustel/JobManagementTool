import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getDatabase, ref, set } from "firebase/database";


function writeJobData(appDate, appID, company, followUpDate, jobID, jobLink, position, status) {
    const db = getDatabase();
    set(ref(db, 'jobApplications/' + company + '-' + position), {
        appDate: appDate,
        appID: appID,
        company: company,
        followUpDate: followUpDate,
        jobID: jobID,
        jobLink: jobLink,
        position: position,
        status: status
    });
};

const AddJob = () => {
    const [job, setJob] = useState({
        company: '',
        position: '',
        appDate: '',
        followUpDate: '',
        appID: '',
        jobID: '',
        jobLink: '',
        status: 'Applied',
    })
    const appDateInputRef = useRef(null);
    const followDateInputRef = useRef(null);



    const handleChange = (event) => {
        setJob({ ...job, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        writeJobData(job.appDate, job.appID, job.company, job.followUpDate, job.jobID, job.jobLink, job.position, job.status)
        console.log("job created: ", job);
    };

    return (
        <div className="create">
            <h2>Add a New Job Application</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch', minWidth: 120 },
                }}
                noValidate
                autoComplete="off"

            >
                {/* <FormControl> */}


                <div>
                    <InputLabel id="demo-simple-select-label">Company</InputLabel>
                    <TextField
                        label="Company"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="company"
                        onChange={handleChange}
                    >
                    </TextField>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>

                    <TextField
                        label="Position"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="position"
                        onChange={handleChange}                    >
                    </TextField>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Application Date</InputLabel>

                    {/* <TextField
                        label="Application Date"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="appDate"
                        onChange={handleChange}                    >
                    </TextField> */}
                    <div>
                        <input
                            type="date"
                            name="appDate"
                            onChange={handleChange}
                            ref={appDateInputRef}
                        />
                        {/* <p>Selected Date: {job.appDate}</p> */}
                    </div>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Follow Up Date</InputLabel>

                    {/* <TextField
                        label="FollowUpDate"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="followUpDate"
                        onChange={handleChange}                    >
                    </TextField> */}
                                        <div>
                        <input
                            type="date"
                            name="followUpDate"
                            onChange={handleChange}
                            ref={followDateInputRef}
                        />
                        {/* <p>Selected Date: {job.followUpDate}</p> */}
                    </div>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Job Link</InputLabel>

                    <TextField
                        label="Job Link"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="jobLink"
                        onChange={handleChange}                    >
                    </TextField>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Job ID</InputLabel>

                    <TextField
                        label="Job ID"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="jobID"
                        onChange={handleChange}                    >
                    </TextField>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Application ID</InputLabel>

                    <TextField
                        label="Application ID"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        name="appID"
                        onChange={handleChange}                    >
                    </TextField>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                        name="status"
                        value={job.status}
                        onChange={handleChange}                    >
                        <MenuItem value={'Applied'}>Applied</MenuItem>
                        <MenuItem value={'Followed Up'}>Followed Up</MenuItem>
                        <MenuItem value={'Interviewing'}>Interviewing</MenuItem>
                        <MenuItem value={'Archived'}>Archived</MenuItem>
                    </Select>
                </div>
                <button onClick={handleSubmit}>Add Job Application</button>
                {/* </FormControl> */}
            </Box>

        </div>
    );
}

export default AddJob;
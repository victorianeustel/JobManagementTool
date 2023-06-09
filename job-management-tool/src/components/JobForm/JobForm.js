import { Container, TextField } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
// import { Select, FormControl, MenuItem, InputLabel, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { getDatabase, ref, set } from "firebase/database";
import Form from 'react-bootstrap/Form';
import './FormStyle.css';



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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setJob({ ...job, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        writeJobData(job.appDate, job.appID, job.company, job.followUpDate, job.jobID, job.jobLink, job.position, job.status)
        console.log("job created: ", job);
        setOpen(true);
    };

    return (
        <Container className='form-container'>
            <div className='job-form'>
                <h4 className='form-title'>Add Job Application</h4>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Company</label>
                        <input size="md" type="text" placeholder="Google" name="company" onChange={handleChange} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Position</label>
                        <input size="md" type="text" placeholder="Software Developer" name="position" onChange={handleChange} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Application Date</label>
                        <input
                            type="date"
                            name="appDate"
                            className='date-picker'
                            onChange={handleChange}
                            ref={appDateInputRef}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Follow Up Date</label>
                        <input
                            type="date"
                            name="followUpDate"
                            className='date-picker'
                            onChange={handleChange}
                            ref={followDateInputRef}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Job ID</label>
                        <input size="md" type="text" placeholder="12345" name="jobID" onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Application ID</label>
                        <input size="md" type="text" placeholder="12345" name="appID" onChange={handleChange}/>
                    </div>
                    <div class="col-8">
                        <label for="inputAddress" class="form-label">Job Link</label>
                        <input size="md" type="text" placeholder="www.indeed.com/JobPosition" name="jobLink" onChange={handleChange}/>
                    </div>
                    <div class="col-4">
                        <label for="inputAddress" class="form-label">Application Status</label>
                        <select class="status-select" aria-label=".form-select-sm example" name="status" onChange={handleChange}>
                            <option selected>Select Status</option>
                            <option value="Applied">Applied</option>
                            <option value="Followed Up">Followed Up</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Archived">Archived</option>
                        </select>                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Add Job Application</button>
                    </div>

                </form>
            </div>
        </Container>
    );
}

export default AddJob;
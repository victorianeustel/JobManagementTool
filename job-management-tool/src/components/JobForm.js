import { TextField } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import { Select, FormControl, MenuItem, InputLabel, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
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
        <div className="create" style={{margin: '30px'}}>
            <h2>Add a New Job Application</h2>
            <Box>

            </Box>
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
                <Button onClick={handleSubmit} variant='contained' sx={{color:'white', background: '#243c55'}}>Add Job Application</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Job Application Added."}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus >
                            Close
                        </Button>
                        
                    </DialogActions>
                </Dialog>
                {/* </FormControl> */}
            </Box>

        </div>
    );
}

export default AddJob;
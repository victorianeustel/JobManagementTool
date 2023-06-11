import React from "react";
import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import {Button, Row, Col, Form, Container} from "react-bootstrap";
import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import '../styles/FormStyle.css';

function writeJobData(appDate, appID, company, followUpDate, jobID, jobLink, position, status, notes) {
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
        notes: notes
    });
};

const AddJob = () => {
    const [form, setForm] = useState({
        company: '',
        position: '',
        appDate: '',
        followUpDate: '',
        appID: '',
        jobID: '',
        jobLink: '',
        status: '',
        notes: ''
    })

    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = useState({})

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        if (!!errors[event.target.name]) setErrors({
            ...errors,
            [event.target.name]: null
        })
    };

    const validateForm = () => {
        const { company, position, appDate, jobLink, status } = form
        const newErrors = {}
        if (!company || company === '') newErrors.company = 'Company name cannot be blank'
        if (!position || position === '') newErrors.position = 'Job Position cannot be blank'
        if (!appDate || appDate === '') newErrors.appDate = 'Job Application Date cannot be blank'
        if (!status || status === '') newErrors.status = 'App. Status cannot be blank'
        if (!jobLink || jobLink === '') newErrors.jobLink = 'Link to job description cannot be blank'

        return newErrors
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            writeJobData(form.appDate, form.appID, form.company, form.followUpDate, form.jobID, form.jobLink, form.position, form.status, form.notes)
            setOpen(true);
        }
    };

    return (
        <Container className='form-container'>
            <div className='job-form'>
                <h4 className='form-title'>Add Job Application</h4>
                <Form class="row g-3 needs-validation" noValidate>
                    <Row>
                        <Form.Group class="col-md-6" as={Col}>
                            <Form.Label for="inputCompany" class="form-label">Company</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Google"
                                name="company"
                                isInvalid={!!errors.company}
                                class="form-control"
                                id="inputCompany"
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.company}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group class="col-md-6">
                            <Form.Label for="inputPosition" class="form-label">Position</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Software Developer"
                                name="position"
                                class="form-control"
                                id="inputPosition"
                                onChange={handleChange}
                                isInvalid={!!errors.position}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.position}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group class="col-md-6" as={Col}>
                            <label for="inputAppDate" class="form-label" >Application Date</label>
                            <Form.Control
                                type="date"
                                name="appDate"
                                class="form-control"
                                onChange={handleChange}
                                isInvalid={!!errors.appDate}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.appDate}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group class="col-md-6">
                            <Form.Label for="inputFollowUpDate" class="form-label">Follow Up Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="followUpDate"
                                class="form-control"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group class="col-md-6">
                            <Form.Label for="inputJobId" class="form-label">Job ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="12345"
                                name="jobID"
                                class="form-control"
                                id="inputJobId"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group class="col-md-6">
                            <Form.Label for="inputAppId" class="form-label">Application ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="12345"
                                name="appID"
                                class="form-control"
                                id="inputAppId"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group class="col-8">
                            <Form.Label for="inputJobLink" class="form-label">Job Link</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="www.indeed.com/JobPosition"
                                name="jobLink"
                                class="form-control"
                                id="inputJobLink"
                                onChange={handleChange}
                                isInvalid={!!errors.jobLink}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.jobLink}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group class="col-4">
                            <Form.Label for="inputStatus" class="form-label">Application Status</Form.Label>
                            <Form.Select
                                className={!!errors.status}
                                name="status"
                                id="inputStatus"
                                onChange={handleChange}
                                isInvalid={!!errors.status}
                                required
                                defaultValue={"Select Status"}
                            >
                                <option disabled>Select Status</option>
                                <option value="Applied">Applied</option>
                                <option value="Followed Up">Followed Up</option>
                                <option value="Interviewing">Interviewing</option>
                                <option value="Archived">Archived</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                {errors.status}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group class="col-12">
                            <Form.Label for="inputNotes" class="form-label">Notes:</Form.Label>
                            <Form.Control
                                as="textarea"
                                className="form-control"
                                id="commentBox"
                                onChange={handleChange}
                                placeholder="Add any comments about the job."
                                name="notes"
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group class="col-12">
                            <Button
                                type="submit"
                                class="btn btn-primary"
                                id="submit-button"
                                onClick={handleSubmit}>
                                Add Job Application
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle id="alert-dialog-title">
                    {"Job Application Added."}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default AddJob;
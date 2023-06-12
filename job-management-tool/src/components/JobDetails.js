import { useLocation } from 'react-router-dom'
import { useState, React } from "react";
import '../styles/JobDetail.css';
import { Button, Row, Col, Container, Form, Label } from "react-bootstrap";
import CreateIcon from '@mui/icons-material/Create';
import InterviewQuestions from './OpenAiData';
import '../styles/Global.css';

function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;
  const jobKey = location.state?.jobKey;
  
  return (
    <Container className='form-container'>
      <div className="details-form">
        <Row>
          <Col md={8}>
            <div className="job-header" as={Col}>
              <h4 className='form-title'>{job.company} - {job.position} </h4>
              <div id="jobKey">id: {jobKey}</div>
            </div>
          </Col>
          <Col md={4}>
            <Button>Interview Questions</Button>
          </Col>
        </Row>

        <div className="job-content">
          <Row>
            <Col>
              <Form.Label>Company</Form.Label>
              <div className='job-detail'>{job.company} </div>
            </Col>
            <Col>
              <Form.Label>Position</Form.Label>
              <div className='job-detail'>{job.position} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Application Date</Form.Label>
              <div className='job-detail'>{job.appDate} </div>
            </Col>
            <Col>
              <Form.Label>Follow Up Date</Form.Label>
              <div className='job-detail'>{job.followUpDate} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Application ID</Form.Label>
              <div className='job-detail'>{job.appID} </div>
            </Col>
            <Col>
              <Form.Label>Job ID</Form.Label>
              <div className='job-detail'>{job.jobID} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Job Link</Form.Label>
              <div className='job-detail'>
                <a href={job.jobLink}>
                  {job.jobLink} 
                </a>
                </div>
            </Col>
            <Col>
              <Form.Label>Status</Form.Label>
              <div className={job.status} id="badge">{job.status} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Notes</Form.Label>
              <div className='job-detail notes'>{job.notes} </div>
            </Col>
          </Row>
        </div >
      </div>
    </Container>
  )
}

export default JobDetail;
import { useLocation } from 'react-router-dom'
import { useState, React } from "react";
import '../styles/JobDetail.css';
import { Button, Row, Col, Container, Form, Modal, Spinner } from "react-bootstrap";
import CreateIcon from '@mui/icons-material/Create';
import '../styles/Global.css';
import LoadingButton from './Button';
import { fetchQuestions, fetchKeywords } from '../actions/OpenAiData';

function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;
  const jobKey = location.state?.jobKey;

  var linkSubString = (job.jobLink).substring(0, 30) + "...";

  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = useState(false)

  const handleClose = () => setShow(false);

  async function handleClick() {
    try {
      setShowLoader(true);
      const questionList = await fetchQuestions(job.jobDescription);
      setQuestions(JSON.parse(questionList));
      setShowLoader(false);
      setShow(true);
    } catch (error) {
      console.error(error);
    }
  }

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
            {/* <Button onClick={handleClick}>Interview Questions</Button> */}
            <LoadingButton
              text="Interview Questions"
              onSubmit={handleClick}
              loading={showLoader}
              disabled={showLoader}
            />
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
            <Col md={6}>
              <Form.Label>Job Link</Form.Label>
              <div className='job-detail'>
                <a href={job.jobLink}>
                  {/* {job.jobLink} */}
                  {linkSubString}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <Form.Label>Status</Form.Label>
              <div className={job.status} id="badge">{job.status} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Job Description</Form.Label>
              <div className='job-detail notes'>{job.jobDescription} </div>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AI Generated Interview Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            {questions.map((item, key) => {
              return (<li key={key}>{item} </li>);
            })}
          </ol>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={handleClose}>
            Save Questions
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default JobDetail;
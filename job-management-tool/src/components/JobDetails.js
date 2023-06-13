import { useLocation } from 'react-router-dom'
import { useState, React } from "react";
import '../styles/JobDetail.css';
import { Button, Grid, Row, Col, Container, Form, Modal, Spinner } from "react-bootstrap";
import CreateIcon from '@mui/icons-material/Create';
import '../styles/Global.css';
import LoadingButton from './Button';
import { fetchQuestions, fetchKeywords } from '../actions/OpenAiData';
import { updateJob } from '../actions/Database';

function JobDetail() {
  const location = useLocation();
  const job = location.state?.job;
  const jobKey = location.state?.jobKey;

  var linkSubString = (job.jobLink).substring(0, 30) + "...";

  const [questions, setQuestions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = useState(false)

  const handleClose = () => setShow(false);

  async function handleClick() {
    try {
      setShowLoader(true);
      const questionList = await fetchQuestions(job.jobDescription);
      const keywordsList = await fetchKeywords(job.jobDescription);
      setQuestions(JSON.parse(questionList));
      setKeywords(JSON.parse(keywordsList));
      console.log(questionList);
      console.log(keywordsList);
      updateJob(jobKey, questions, keywords);
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
            <LoadingButton
              text="Generate Questions & Keywords"
              onSubmit={handleClick}
              loading={showLoader}
              disabled={showLoader}
            />
          </Col>
        </Row>

        <div className="job-content">
          <Container>
            <Row>
              <Col md={8}>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <Form.Label>Company</Form.Label>
                        <div className='job-detail'>{job.company} </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Application Date</Form.Label>
                        <div className='job-detail'>{job.appDate} </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Application ID</Form.Label>
                        <div className='job-detail'>{job.appID} </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Job Link</Form.Label>
                        <div className='job-detail'>
                          <a href={job.jobLink}>
                            {linkSubString}
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Form.Label>Position</Form.Label>
                        <div className='job-detail'>{job.position} </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Follow Up Date</Form.Label>
                        <div className='job-detail'>{job.followUpDate} </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col >
                        <Form.Label>Job ID</Form.Label>
                        <div className='job-detail'>{job.jobID} </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col >
                        <Form.Label>Status</Form.Label>
                        <div className={job.status} id="badge">{job.status} </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Job Description</Form.Label>
                    <div className='job-detail notes'>{job.jobDescription} </div>
                  </Col>
                </Row>

              </Col>
              <Col md={4}>
                <Row>
                  <Col >
                    <Form.Label>Interview Questions</Form.Label>
                    <div className='job-detail'>
                      <ol>
                        {job.interviewQuestions.map((item, key) => {
                          return (<li key={key}>{item} </li>);
                        })}
                      </ol>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Keywords</Form.Label>
                    <div className='job-detail'>
                      <ol>
                        {job.keywords.map((item, key) => {
                          return (<li key={key}>{item} </li>);
                        })}
                      </ol>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Notes</Form.Label>
                    <div className='job-detail notes'>{job.notes} </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

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
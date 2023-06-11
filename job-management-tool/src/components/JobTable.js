import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";
import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/DataTable.css';
import {Spinner, Container, Table, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class JobTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [], isLoading: true
    }
  }

  componentDidMount() {
    const dbRef = ref(db, 'jobApplications');

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ "key": keyName, "data": data });
      });
      this.setState({ tableData: records, isLoading: false });
    });
  }

  render() {
    const { tableData, isLoading } = this.state;

    /* Loading screen while data is loading from database */
    if (isLoading) {
      return (
        <div className='loading-container'>
          <Spinner animation="border" variant="light" />
        </div>
      )
    }
    /* Job Table screen once data has been loaded */
    else {
      return (
        <Container className='jobs-container'>
          <h4 className='form-title'>Job Applications</h4>
          <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table" className="jobs-table">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>Company</th>
                <th align="right">Position</th>
                <th align="right">Application Date</th>
                <th align="right">Follow Up Date</th>
                <th align="right">Status</th>
                <th align="right"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((job, index) => {
                return (
                  <tr
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={job.key}
                  >
                    {/* <th>{job.key}</th> */}
                    <th component="th" scope="row">
                      {job.data.company}
                    </th>

                    <th align="right">
                      <a href={job.data.jobLink}>{job.data.position}
                      </a>
                    </th>
                    <th align="right">{job.data.appDate}</th>
                    <th align="right">{job.data.followUpDate}</th>
                    <th align="right">
                      <div
                          id="badge"className={job.data.status}>
                        {job.data.status}
                      </div>
                    </th>
                    <th align="right">
                      <Link to={`/jobs/${job.key}`} state={{
                        job: job.data, jobKey: job.key
                        // id: job.key, company: job.company, position: job.position, appDate: job.appDate, followUpDate: job.followUpDate, jobLink: job.jobLink, status: job.status, notes: job.notes
                      }}>
                        <MoreHorizIcon />
                      </Link>
                    </th>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      )
    }
  }
}
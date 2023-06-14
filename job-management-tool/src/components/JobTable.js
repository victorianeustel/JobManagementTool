import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";
import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/DataTable.css';
import {Spinner, Container, Table, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Global.css';

import { useState, useEffect } from "react";

export function JobTable() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(db, 'jobApplications');

    const fetchData = (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      setTableData(records);
      setIsLoading(false);
    };

    const handleData = onValue(dbRef, fetchData);

    return () => {
      handleData(); // Clean up the event listener when the component unmounts
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="light" />
      </div>
    );
  } else {
    return (
      <Container className="job-container">
        <div className="jobs-container">
          <h4 className="form-title">Job Applications</h4>
          <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table" className="jobs-table">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>Company</th>
                <th align="right">Position</th>
                <th align="right">Date Applied</th>
                {/* <th align="right">Follow Up Date</th> */}
                <th align="right">Status</th>
                <th align="right"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((job, index) => (
                <tr sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={job.key}>
                  {/* <th>{job.key}</th> */}
                  <th component="th" scope="row">
                    {job.data.company}
                  </th>
                  <th align="right">
                    <a href={job.data.jobLink}>{job.data.position}</a>
                  </th>
                  <th align="right">{job.data.appDate}</th>
                  {/* <th align="right">{job.data.followUpDate}</th> */}
                  <th align="right">
                    <div id="badge" className={job.data.status}>
                      {job.data.status}
                    </div>
                  </th>
                  <th align="right">
                    <Link to={`/jobs/${job.key}`} state={{ job: job.data, jobKey: job.key }}>
                      <MoreHorizIcon />
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}

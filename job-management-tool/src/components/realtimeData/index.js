import { ref, onValue, set } from "firebase/database";
import { db } from "../../utils/firebase";
import * as React from 'react';

import Table from 'react-bootstrap/Table';
import { Container } from "@mui/material";


export class RealtimeData extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db,'jobApplications');

        onValue(dbRef, (snapshot)=> {
            let records = [];
            snapshot.forEach(childSnapshot =>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableData: records});
        });
    }

    render() {
        return(
          <Container>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
              <thead>
                <tr>
                    <th>#</th>
                  <th>Company</th>
                  <th align="right">Position</th>
                  <th align="right">Application Date</th>
                  <th align="right">Follow Up Date</th>
                  {/* <th align="right">Job ID</th>
                  <th align="right">Application ID</th> */}
                  <th align="right">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((job, index) => {
                    return (
                  <tr
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <th>{index}</th>
                    <th component="th" scope="row">
                      {job.data.company}
                    </th>
                    
                    <th align="right">
                        <a href={job.data.jobLink}>{job.data.position}
                            </a>
                        </th>
                    <th align="right">{job.data.appDate}</th>
                    <th align="right">{job.data.followUpDate}</th>
                    {/* <th align="right">{job.data.jobID}</th> 
                    <th align="right">{job.data.appID}</th> */}
                    <th align="right">{job.data.status}</th>
                  </tr>
                )})}
              </tbody>
            </Table>
            </Container>
        )
    }
}
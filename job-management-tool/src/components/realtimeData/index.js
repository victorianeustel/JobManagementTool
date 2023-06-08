import { ref, onValue, set } from "firebase/database";
import { db } from "../../utils/firebase";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell align="right">Position</TableCell>
                  <TableCell align="right">Application Date</TableCell>
                  <TableCell align="right">Follow Up Date</TableCell>
                  {/* <TableCell align="right">Job ID</TableCell>
                  <TableCell align="right">Application ID</TableCell> */}
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.tableData.map((job, index) => {
                    return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{index}</TableCell>
                    <TableCell component="th" scope="row">
                      {job.data.company}
                    </TableCell>
                    
                    <TableCell align="right">
                        <a href={job.data.jobLink}>{job.data.position}
                            </a>
                        </TableCell>
                    <TableCell align="right">{job.data.appDate}</TableCell>
                    <TableCell align="right">{job.data.followUpDate}</TableCell>
                    {/* <TableCell align="right">{job.data.jobID}</TableCell> 
                    <TableCell align="right">{job.data.appID}</TableCell> */}
                    <TableCell align="right">{job.data.status}</TableCell>
                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </TableContainer>
        )
    }
}
import { useLocation } from 'react-router-dom'

function JobDetail () {
  const location = useLocation();
  const job = location.state?.job;

  return (
    <div className="page">
    Job Detail Page
    <h1> Company: {job ? job.company : "Job Not Found"} </h1>
    <h1> Position: {job ? job.position : "Job Not Found"} </h1>
    <h1> Application Date: {job ? job.appDate : "Job Not Found"} </h1>

  </div>
  )
}

export default JobDetail;
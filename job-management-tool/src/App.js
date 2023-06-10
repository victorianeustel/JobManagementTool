import './App.css';
import { JobTable } from './components/JobTable/JobTable';
import NavBar from './components/NavBar/NavBar';
import AddJob from './components/JobForm/JobForm';
import JobDetails from './components/JobDetails/JobDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
    <NavBar />
        <Routes>
          <Route exact path="/" element={<JobTable/>}/>
          <Route exact path="/jobapplications" element={<JobTable/>}/>
          <Route exact path="/addjob" element={<AddJob/>}/>
          <Route exact path="/jobdetails/:id" element={<JobDetails/>}/>
        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

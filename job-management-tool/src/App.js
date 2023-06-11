import './App.css';
import { JobTable } from './components/JobTable';
import NavBar from './components/NavBar';
import AddJob from './components/JobForm';
import JobDetails from './components/JobDetails';
import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import StatusTabs from './components/JobLanding';
import JobDetail from './components/JobDetails';
import ChatbotApp from './components/openai';
import errorPage from './components/errorPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<JobTable />} />
        <Route exact path="/jobs" element={<JobTable />} />
        <Route exact path="/addjob" element={<AddJob />} />
        <Route path="/jobs/:jobKey" element={<JobDetail/>} errorElement={< errorPage/>} />
        {/* <Route exact path="/chatbot" element={<ChatbotApp />} /> */}


        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

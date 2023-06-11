import './App.css';
import { JobTable } from './components/JobTable';
import NavBar from './components/NavBar';
import AddJob from './components/JobForm';
import JobDetails from './components/JobDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import StatusTabs from './components/JobLanding';
import JobDetail from './components/JobDetails';
import ChatbotApp from './components/openai';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<StatusTabs />} />
        <Route exact path="/jobs" element={<JobTable />} />
        <Route exact path="/addjob" element={<AddJob />} />
        <Route path="/jobs/:jobKey" element={<JobDetail/>} />
        <Route exact path="/chatbot" element={<ChatbotApp />} />


        </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

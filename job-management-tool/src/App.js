import './App.css';
import { RealtimeData } from './components/realtimeData';
import NavBar from './components/NavBar';
import AddJob from './components/JobForm';
import JobDetails from './components/JobDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <NavBar />
        <Routes>
          <Route exact path="/" element={<RealtimeData/>}/>
          <Route exact path="/addjob" element={<AddJob/>}/>
          <Route exact path="/jobdetails/:id" element={<JobDetails/>}/>
        </Routes>
    </Router>
  );
}

export default App;
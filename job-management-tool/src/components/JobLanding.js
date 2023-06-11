import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer'
import Container from 'react-bootstrap/esm/Container';
import { JobTable } from './JobTable';



function StatusTabs() {
  return (
    <Container>
    <TabContainer>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="All">
          <JobTable/>
        </Tab>
        <Tab eventKey="profile" title="Applied">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Interviewing">
          Tab content for Contact
        </Tab>
        <Tab eventKey="profile" title="Followed Up">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Archived">
          Tab content for Contact
        </Tab>
      </Tabs>
    </TabContainer>
    </Container>
  );
}

export default StatusTabs;
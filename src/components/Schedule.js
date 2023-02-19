import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./Schedule.css";
import { MondaySchedule } from "./table-components/MondaySchedule";
import { TuesdaySchedule } from "./table-components/TuesdaySchedule";
import { WednesdaySchedule } from "./table-components/WednesdaySchedule";
import { ThursdaySchedule } from "./table-components/ThursdaySchedule";
import { FridaySchedule } from "./table-components/FridaySchedule";

function Schedule() {
  return (
    <div className="container">
      <Tab.Container defaultActiveKey="monday">
        <Nav variant="tabs" className="tab-nav">
          <Nav.Item className="nav-item">
            <Nav.Link eventKey="monday">Monday</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tuesday">Tuesday</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="wednesday">Wednesday</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="thursday">Thursday</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="friday">Friday</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane className="schedule-tabs" eventKey="monday">
            <MondaySchedule />
          </Tab.Pane>
          <Tab.Pane className="schedule-tabs" eventKey="tuesday">
            <TuesdaySchedule />
          </Tab.Pane>
          <Tab.Pane className="schedule-tabs" eventKey="wednesday">
            <WednesdaySchedule />
          </Tab.Pane>
          <Tab.Pane className="schedule-tabs" eventKey="thursday">
            <ThursdaySchedule />
          </Tab.Pane>
          <Tab.Pane className="schedule-tabs" eventKey="friday">
            <FridaySchedule />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default Schedule;

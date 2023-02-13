import Table from "react-bootstrap/esm/Table";

export const FridaySchedule = () => {
  return (
    <Table bordered hover responsive className="table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Class</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00 - 9:45 AM</td>
          <td>An eiusdem modi</td>
          <td>Dolore Sunt Non</td>
        </tr>
        <tr>
          <td>10:00 - 10:45 AM</td>
          <td>Ipsum Quam Alias</td>
          <td>Est Quae Nobis</td>
        </tr>
        <tr>
          <td>11:00 - 11:45 AM</td>
          <td>Quasi Sunt Nostrum</td>
          <td>Ipsa Quae Tempora</td>
        </tr>
        <tr>
          <td>12:00 - 1:00 PM</td>
          <td>Lorem Ipsum</td>
          <td> Dolor Sit Amet</td>
        </tr>
        <tr>
          <td>1:00 - 1:45 PM</td>
          <td>An eiusdem modi</td>
          <td>Dolore Sunt Non</td>
        </tr>
        <tr>
          <td>2:00 - 2:45 PM</td>
          <td>Ipsum Quam Alias</td>
          <td>Est Quae Nobis</td>
        </tr>
      </tbody>
    </Table>
  );
};

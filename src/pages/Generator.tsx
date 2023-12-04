import "../css/generator.css"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Alert from "react-bootstrap/Alert"
import {GraphUp, FileRuled, Gear, Tools, List} from "react-bootstrap-icons"
import  "../ts/generator-script.ts";



export default function Generator() {
  return <>
    <Navbar />

    <div className="generator">
      <div className="generator-alerts">

      </div>
      <div className="generator-tabs">
        <Card className="generator-card generator-service-report-card">
            <Card.Header className="generator-card-header"><FileRuled/><h4>Generator Service Report </h4></Card.Header>
            <Card.Body className="report-body">Last Service: 17 Jan 2020</Card.Body>
          </Card>
          <Card className="generator-card generator-usaged-tracker" onClick={showGeneratorDieselTracker}>
            <Card.Header className="generator-card-header"><GraphUp/><h4>Generator Diesel Tracker</h4></Card.Header>
            <Card.Body className="report-body">Capacity: 20%</Card.Body>
          </Card>
          <Card className="generator-card generator-diagnostics">
            <Card.Header className="generator-card-header"><Tools/><h4>Generator Diagnostics </h4></Card.Header>
            <Card.Body className="report-body">Last Service: 17 Jan 2020</Card.Body>
          </Card>
          <Card className="generator-card generator-event-logs">
            <Card.Header className="generator-card-header"><List/><h4>Generator Event Logs</h4></Card.Header>
            <Card.Body className="report-body">Electronic Failed to synchronize</Card.Body>
          </Card>
      </div>
      <div className="generator-content">
        <div className="generator-content-header">
            <h1>Generator Spreadsheet</h1>
            <button className="btn btn-success">New Entry</button>
        </div>

        <Table striped bordered hover>
            <thead>
              <tr>
                <th>No/Starts</th>
                <th>Date</th>
                <th>Fuel Added</th>
                <th>Initial Fuel (ltr)</th>
                <th>Final Fuel </th>
                <th>Final %</th>
                <th>Start Time</th>
                <th>Stop Time</th>
                <th>Run Time </th>
                <th>Error Code/ Comment</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>28 Nov 2023</td>
                <td>80</td>
                <td>150</td>
                <td>230</td>
                <td>87%</td>
                <td>14:40</td>
                <td>17:30</td>
                <td>2:50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>28 Nov 2023</td>
                <td>80</td>
                <td>150</td>
                <td>230</td>
                <td>87%</td>
                <td>14:40</td>
                <td>17:30</td>
                <td>2:50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>28 Nov 2023</td>
                <td>80</td>
                <td>150</td>
                <td>230</td>
                <td>87%</td>
                <td>14:40</td>
                <td>17:30</td>
                <td>2:50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>28 Nov 2023</td>
                <td>80</td>
                <td>150</td>
                <td>230</td>
                <td>87%</td>
                <td>14:40</td>
                <td>17:30</td>
                <td>2:50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>28 Nov 2023</td>
                <td>80</td>
                <td>150</td>
                <td>230</td>
                <td>87%</td>
                <td>14:40</td>
                <td>17:30</td>
                <td>2:50</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
      </div>
    </div>
  </>
}

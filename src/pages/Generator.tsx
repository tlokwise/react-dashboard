import { useEffect, useState } from "react";

import "../css/generator.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Alert from "react-bootstrap/Alert";
import { GraphUp, FileRuled, Tools, List } from "react-bootstrap-icons";

//COMPONENTS
import Navbar from "../components/Navbar";
import GeneratorNewEntry from "../components/GeneratorNewEntry";
//FUNCTIONS AND CONSTANTS

import GeneratorEventLogs from "../components/GeneratorEventLogsModal";
import SideBin from "../components/SideBin";

type SpreadsheetEntry = {
  noStart: string | number;
  date: string;
  fuelAdded: number;
  initiaFuel: number;
  finalFuel: number;
  finalPercentage: number;
  startTime: string;
  stopTime: string;
  runTime: string;
  errorCodeComment: string;
  name: string;
};

export default function Generator() {
  //Generator Event Logs Handler
  const [showGeneratorEventLogs, setShowGeneratorEventLogs] = useState(false);
  const onGeneratorEventLogsClick = () => {
    setShowGeneratorEventLogs(true);
  };

  //New spreasheet entry handler
  const [spreadsheetNewEntry, setSpreadsheetNewEntry] = useState(false);
  const onSpreadsheetNewEntryClick = () => {
    if (spreadsheetNewEntry) {
      setSpreadsheetNewEntry(false);
    } else {
      setSpreadsheetNewEntry(true);
    }
  };

  //SPREADSHEET ROW DELETE SIDE BIN
  const [hoveredRow, setHoveredRow] = useState(-1);
  const onRowHover = (index: number) => {
    setHoveredRow(index);
  };
  const onRowLeave = () => {
    setHoveredRow(-1);
  };

  //DELETING SPREADSHEET ROW USING SIDE BIN
  const onRowDelete = () => {};

  //fetching spreadsheet data
  const [spreadsheetData, setSpreadsheetData] = useState<SpreadsheetEntry[]>(
    []
  );
  useEffect(() => {
    fetch("/dummy.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpreadsheetData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [spreadsheetData]);
  return (
    <>
      <GeneratorEventLogs show={showGeneratorEventLogs ? "show" : ""} />
      <Navbar />
      <div className="generator">
        <div className="generator-alerts"></div>
        <div className="generator-tabs">
          <Card className="generator-card generator-service-report-card">
            <Card.Header className="generator-card-header">
              <FileRuled />
              <h4>Generator Service Report </h4>
            </Card.Header>
            <Card.Body className="report-body">
              Last Service: 17 Jan 2020
            </Card.Body>
          </Card>
          <Card className="generator-card generator-usage-tracker">
            <Card.Header className="generator-card-header">
              <GraphUp />
              <h4>Generator Diesel Tracker</h4>
            </Card.Header>
            <Card.Body className="report-body">Capacity: 20%</Card.Body>
          </Card>
          <Card className="generator-card generator-diagnostics">
            <Card.Header className="generator-card-header">
              <Tools />
              <h4>Generator Diagnostics </h4>
            </Card.Header>
            <Card.Body className="report-body">Excessive leaks</Card.Body>
          </Card>
          {/* GENERATOR EVENT LOGS MODAL */}
          <Card
            className="generator-card generator-event-logs"
            onClick={onGeneratorEventLogsClick}
          >
            <Card.Header className="generator-card-header">
              <List />
              <h4>Generator Event Logs</h4>
            </Card.Header>
            <Card.Body className="report-body">
              Electronic Failed to synchronize
            </Card.Body>
          </Card>
        </div>
        <div className="generator-content">
          <div className="generator-content-header">
            <h1>Spreadsheet</h1>
            <Button
              className="btn btn-success"
              onClick={onSpreadsheetNewEntryClick}
            >
              New Entry
            </Button>
          </div>

          <Table striped bordered hover className="spreedsheet-table">
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
              {spreadsheetNewEntry && <GeneratorNewEntry />}
              {spreadsheetData.map((data, index) => (
                <tr
                  key={index}
                  onMouseEnter={() => onRowHover(index)}
                  onMouseLeave={onRowLeave}
                >
                  <td>{data.noStart}</td>
                  <td>{data.date}</td>
                  <td>{data.fuelAdded}</td>
                  <td>{data.initiaFuel}</td>
                  <td>{data.finalFuel}</td>
                  <td>{data.finalPercentage}</td>
                  <td>{data.startTime}</td>
                  <td>{data.stopTime}</td>
                  <td>{data.runTime}</td>
                  <td>{data.errorCodeComment}</td>
                  <td>{data.name}</td>
                  {hoveredRow === index && (
                    <SideBin onRowDelete={onRowDelete} />
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

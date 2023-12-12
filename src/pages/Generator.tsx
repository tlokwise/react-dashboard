import { useEffect, useState } from "react";

import "../css/generator.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
import { Printer, Share, Plus } from "react-bootstrap-icons";

//COMPONENTS
import Navbar from "../components/Navbar";
import GeneratorNewEntry from "../components/GeneratorNewEntry";
import SideBin from "../components/SideBin";
import GeneratorTabs from "../components/GeneratorTabs";
import ScrollToTopButton from "../components/ScrollToTopButton";
//FUNCTIONS AND CONSTANTS

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
      <ScrollToTopButton />
      <Navbar />
      <div className="generator">
        <div className="generator-alerts"></div>
        <GeneratorTabs />
        <div className="generator-content">
          <div className="generator-content-header">
            <h1>Spreadsheet</h1>
            <div className="generator-content-controls">
              <Button
                className="btn btn-success generator-spreadsheet-new-entry-btn"
                onClick={onSpreadsheetNewEntryClick}
              >
                <Plus />
                New Entry
              </Button>
              <Button className="btn btn-secondary generator-spreadsheet-print-btn">
                <Printer />
              </Button>
              <Button className="btn btn-secondary generator-spreadsheet-share-btn">
                <Share />
              </Button>
            </div>
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

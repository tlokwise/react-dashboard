import Card from "react-bootstrap/Card";
import {
    GraphUp,
    FileRuled,
    Tools,
    List} from "react-bootstrap-icons"

export default function GeneratorTabs() {
  return (
    <div className="generator-tabs">
      <Card className="generator-card generator-service-report-card">
        <Card.Header className="generator-card-header">
          <FileRuled />
          <h4>Service Report </h4>
        </Card.Header>
        <Card.Body className="report-body">Last Service: 17 Jan 2020</Card.Body>
      </Card>
      <Card className="generator-card generator-usage-tracker">
        <Card.Header className="generator-card-header">
          <GraphUp />
          <h4>Diesel Tracker</h4>
        </Card.Header>
        <Card.Body className="report-body">Capacity: 20%</Card.Body>
      </Card>
      <Card className="generator-card generator-diagnostics">
        <Card.Header className="generator-card-header">
          <Tools />
          <h4>Diagnostics </h4>
        </Card.Header>
        <Card.Body className="report-body">Excessive leaks</Card.Body>
      </Card>
      {/* GENERATOR EVENT LOGS MODAL */}
      <Card className="generator-card generator-event-logs">
        <Card.Header className="generator-card-header">
          <List />
          <h4>Event Logs</h4>
        </Card.Header>
        <Card.Body className="report-body">
          Electronic Failed to synchronize
        </Card.Body>
      </Card>
    </div>
  );
}

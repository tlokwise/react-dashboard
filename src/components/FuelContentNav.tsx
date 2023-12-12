import Nav from "react-bootstrap/Nav";

export default function FuelContentNav() {
  return (
    <Nav className="fuel-content-nav" defaultActiveKey="data" variant="pills">
      <Nav.Item>
        <Nav.Link className="fuel-content-nav-link" eventKey="data">
          Data
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="fuel-content-nav-link" eventKey="graph">
          Graph
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

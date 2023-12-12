import Nav from "react-bootstrap/Nav";

interface FuelContentNavProps {
  onContentTypeSelect: (contentType: string) => void;
}

export default function FuelContentNav({
  onContentTypeSelect,
}: FuelContentNavProps) {
  return (
    <Nav className="fuel-content-nav" defaultActiveKey="data" variant="pills">
      <Nav.Item>
        <Nav.Link
          className="fuel-content-nav-link"
          eventKey="data"
          onClick={() => onContentTypeSelect("data")}
        >
          Data
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="fuel-content-nav-link"
          eventKey="graph"
          onClick={() => onContentTypeSelect("graph")}
        >
          Graph
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

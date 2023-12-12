import "../css/fuel.css";

//COMPONENTS
import Navbar from "../components/Navbar";
import FuelTabs from "../components/FuelTabs";

//BOOTSTRAP COMPONENTS
import Nav from "react-bootstrap/Nav";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Fuel() {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <div className="fuel">
        <FuelTabs />
        <div className="fuel-content">
          <Nav className="fuel-content-nav" variant="pills">
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
        </div>
        <div className="fuel-content-body">
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}

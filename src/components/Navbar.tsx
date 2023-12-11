import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  House,
  LightningCharge,
  ShieldLock,
  // Search,
  ListCheck,
  BoxArrowRight,
  ExclamationTriangle,
  Droplet,
  Tools,
  Bell,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="nav-top">
        <h1 className="brand-name">Ultimate Dashboard</h1>

        <div className="user-profile">
          <img
            src="/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
            alt=""
            id="user-profile-picture"
          />
          <span className="username">Alexander Hipp</span>
          <div className="nav-top-controls">
            <span className="reminders">
              <Bell />
            </span>
            <span className="logout">
              <BoxArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="navbar">
        <ul>
          <li className="nav-item">
            <a href="/dashboard/home" className="nav-link">
              <House />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/dashboard/generator" className="nav-link">
              <LightningCharge />
              <span>Generator</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/dashboard/fuel" className="nav-link">
              <Droplet />
              <span>Fuel</span>
            </a>
          </li>
          <li className="nav-item">
            <Link to="#Tasks" className="nav-link">
              <ListCheck />
              <span>Tasks</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#maintenance" className="nav-link">
              <Tools />
              <span>Maintenance</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#incidence" className="nav-link">
              <ExclamationTriangle />
              <span>Incidents</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#security" className="nav-link">
              <ShieldLock />
              <span>Security</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

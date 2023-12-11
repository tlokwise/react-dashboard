import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  House,
  Chat,
  LightningCharge,
  Search,
  BoxArrowRight,
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
            <Link to="#requests" className="nav-link">
              <Chat />
              <span>Requests</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#inspection" className="nav-link">
              <Search />
              <span>Inspection</span>
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
}

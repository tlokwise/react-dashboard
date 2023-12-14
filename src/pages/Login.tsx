import "../css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import { Alert } from "react-bootstrap";

export default function Login() {
  return (
    <div className="form-container">
      <form action="">
        <h1 className="title">Ultimate Heli</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>
        <Alert id="error-msg" variant="danger">
          Incorrect credentials
        </Alert>
        <div className="form-group">
          <button type="submit" id="login-btn" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

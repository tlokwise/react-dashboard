import "../css/login.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Login() {
  return (
    <div className="form-container">
      <div className="title">
        <img src="/Ultimate-Heli-01.png" alt="" id="logo" />
      </div>

      <form action="">
        <h1>Welcome back!</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
        </div>
        <p id="error-msg"></p>
        <div className="form-group">
          <button type="button" id="login-btn" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

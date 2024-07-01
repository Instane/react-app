import "./App.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="blockdisplay">
      <div>
        <img src="./src/images/logo.png" />
        <h1>USER LOGIN</h1>
      </div>
      <div>
        <form>
          <br />
          <input type="text" id="username" placeholder="Username" />
          <br />
          <input type="password" id="password" placeholder="Password" />
        </form>
        <Link to="/home">
          <button>LOG IN</button>
        </Link>
      </div>
      <div class="signuptext">
        <p>Don't have an account?</p>
        <Link class="link" to="/register">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;

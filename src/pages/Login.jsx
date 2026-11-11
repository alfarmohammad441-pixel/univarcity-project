import { useContext, useState } from "react";

import { GraduationCap, Mail, Lock, Eye, EyeOff} from "lucide-react";
import "./style.css";
import { Authcontext } from "../context/Authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
 const navigate=useNavigate()
  const { setUsers } = useContext(Authcontext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  function options(values) {
    axios
    .get(process.env.REACT_APP_API_backendURL5, {
   
    })
     .then((response) => { 
        setUsers(response.data);
        navigate("/dashboard");
    });
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <h1>
          Syria
          <br />
          <strong>Virtual University</strong>
        </h1>
      </div>

      <div className="login-right">
        <div className="login-container">
          <div className="login-icon">
            <GraduationCap size={30} />
          </div>

          <h2>Welcome Back!</h2>

          <p className="login-description">
            Sign in to continue to your account
          </p>

          <div className="input-group">
            <label>Username</label>

            <div className="input-box">
              <Mail size={18} />

              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                type="text"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-box">
              <Lock size={18} />

              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="button" className="login-button" onClick={options}>
            login
          </button>

          <p className="copyright">© 2026 University Management System</p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const strengthScore = Object.values(checks).filter(Boolean).length;

  const getStrengthText = () => {
    if (strengthScore <= 2) return "Weak";
    if (strengthScore <= 4) return "Medium";
    return "Strong";
  };

  const getBarColor = () => {
    if (strengthScore <= 2) return "#e74c3c";
    if (strengthScore <= 4) return "#f1c40f";
    return "#2ecc71";
  };

  return (
    <div className="container">
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Strength Bar */}
      <div className="bar">
        <div
          className="bar-fill"
          style={{
            width: `${strengthScore * 20}%`,
            backgroundColor: getBarColor(),
          }}
        />
      </div>

      <p className="strength-text">
        Strength: <span>{getStrengthText()}</span>
      </p>

      <div className="rules">
        <p className={checks.length ? "ok" : "fail"}>✔ Minimum 8 characters</p>
        <p className={checks.uppercase ? "ok" : "fail"}>✔ One uppercase letter</p>
        <p className={checks.lowercase ? "ok" : "fail"}>✔ One lowercase letter</p>
        <p className={checks.number ? "ok" : "fail"}>✔ One number</p>
        <p className={checks.special ? "ok" : "fail"}>✔ One special character</p>
      </div>
    </div>
  );
}

export default App;

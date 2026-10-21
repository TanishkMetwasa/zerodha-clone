import React, { useState } from "react";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const endpoint = isLogin
      ? "http://localhost:3002/login"
      : "http://localhost:3002/signup";

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      // Store JWT token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage({
        type: "success",
        text: isLogin
          ? "Login successful! Redirecting to Dashboard..."
          : "Account created successfully! Redirecting to Dashboard...",
      });

      // Redirect to Dashboard (running on port 3000 / 3001)
      setTimeout(() => {
        window.location.href = "http://localhost:3000";
      }, 1500);
    } catch (err) {
      setMessage({ type: "danger", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="text-center fw-bold text-primary mb-2">
              {isLogin ? "Login to Zerodha" : "Open a Zerodha Account"}
            </h2>
            <p className="text-center text-muted mb-4">
              {isLogin
                ? "Enter your credentials to access your trading account"
                : "Free investments, flat ₹20 intraday and F&O trades"}
            </p>

            {message.text && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="e.g. rahul_sharma"
                    required={!isLogin}
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">
                  {isLogin ? "Email or Username" : "Email Address"}
                </label>
                <input
                  type={isLogin ? "text" : "email"}
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-muted small fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 fw-bold"
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : isLogin
                  ? "Login"
                  : "Create Account"}
              </button>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted">
                {isLogin
                  ? "Don't have an account yet? "
                  : "Already have an account? "}
              </span>
              <button
                type="button"
                className="btn btn-link p-0 fw-bold"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setMessage({ type: "", text: "" });
                }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

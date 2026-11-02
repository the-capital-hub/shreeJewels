import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import login from '../../assets/contact/login.png'
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // Connect your authentication API here.
    console.log({ email, password, rememberMe });
  };

  return (
    <main className="sj-login">
      <section className="sj-login__visual" aria-label="Shree Jewels">
        <div className="sj-login__brand">
          <span className="sj-login__lotus" aria-hidden="true">✿</span>
          <span>Shree Jewels</span>
        </div>
      </section>

      <section className="sj-login__panel">
        <div className="sj-login__card">
          <Link to="/" className="sj-login__logo" aria-label="Shree Jewels home">
            <span className="sj-login__logo-mark" aria-hidden="true">✿</span>
            <span>Shree Jewels</span>
          </Link>

          <h1>
            Welcome <em>Back</em>
          </h1>

          <div className="sj-login__ornament" aria-hidden="true">
            <span />
            <b>✿</b>
            <span />
          </div>

          <p className="sj-login__intro">
            Login to your account to explore, shop, and manage your orders.
          </p>

          <form className="sj-login__form" onSubmit={handleSubmit}>
            <label className="sj-login__field">
              <span className="sj-login__field-icon" aria-hidden="true">✉</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                aria-label="Email address"
                required
              />
            </label>

            <label className="sj-login__field">
              <span className="sj-login__field-icon" aria-hidden="true">♙</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                aria-label="Password"
                required
              />
              <button
                className="sj-login__show-password"
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>

            <div className="sj-login__options">
              <label className="sj-login__remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button className="sj-login__submit" type="submit">
              Login <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="sj-login__signup">
            Don’t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
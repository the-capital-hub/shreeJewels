import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreed) {
      setError("Please accept the Terms and Conditions.");
      return;
    }

    const userData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      password,
    };

    // Connect your registration API here.
    console.log(userData);
  };

  return (
    <main className="sj-register">
      <section className="sj-register__visual" aria-label="Shree Jewels">
        <Link to="/" className="sj-register__brand">
          <span className="sj-register__brand-mark" aria-hidden="true">
            ✿
          </span>
          <span>Shree Jewels</span>
        </Link>
      </section>

      <section className="sj-register__panel">
        <div className="sj-register__card">
          <Link to="/" className="sj-register__logo" aria-label="Shree Jewels home">
            <span className="sj-register__logo-mark" aria-hidden="true">
              ✿
            </span>
            <span>Shree Jewels</span>
          </Link>

          <h1>
            Create Your <em>Account</em>
          </h1>

          <div className="sj-register__ornament" aria-hidden="true">
            <span />
            <b>✿</b>
            <span />
          </div>

          <p className="sj-register__intro">
            Join Shree Jewels to explore our exclusive collections, track your
            orders, and enjoy a personalized shopping experience.
          </p>

          <form className="sj-register__form" onSubmit={handleSubmit}>
            <div className="sj-register__grid">
              <label className="sj-register__field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="sj-register__field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="sj-register__field">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="sj-register__field">
                <span>Password</span>
                <span className="sj-register__password">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </span>
              </label>

              <label className="sj-register__field sj-register__field--wide">
                <span>Confirm Password</span>
                <span className="sj-register__password">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((visible) => !visible)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </span>
              </label>
            </div>

            <label className="sj-register__terms">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />
              <span>
                I agree to the <Link to="/terms">Terms and Conditions</Link> and{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>

            {error && (
              <p className="sj-register__error" role="alert">
                {error}
              </p>
            )}

            <button className="sj-register__submit" type="submit">
              Create Account <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="sj-register__login">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
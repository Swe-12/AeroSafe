import { useNavigate } from 'react-router-dom'
import { Plane } from 'lucide-react'

const PilotSignup = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Placeholder for backend integration
  }

  return (
    <main className="form-page">
      <section className="signup-card">
        <div className="signup-icon pilot">
          <Plane aria-hidden="true" />
        </div>
        <h2>Pilot Signup</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="pilot-name">Name</label>
            <input id="pilot-name" name="name" type="text" placeholder="Enter full name" required />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-email">Email ID</label>
            <input
              id="pilot-email"
              name="email"
              type="email"
              placeholder="pilot@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-id">Pilot ID</label>
            <input id="pilot-id" name="pilotId" type="text" placeholder="AS-PLT-001" required />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-password">Password</label>
            <input
              id="pilot-password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="pilot-confirm-password">Confirm Password</label>
            <input
              id="pilot-confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter password"
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>

        <p className="login-cta">
          Already have an account?{' '}
          <a href="/login" className="landing-link">
            Login
          </a>
        </p>

        <div className="toggle-wrapper">
          <button
            className="toggle-switch"
            type="button"
            aria-label="Switch to admin signup"
            onClick={() => navigate('/admin-signup')}
          >
            <span className="toggle-indicator" />
          </button>
          <p className="toggle-label">Admin Signup</p>
        </div>
      </section>
    </main>
  )
}

export default PilotSignup


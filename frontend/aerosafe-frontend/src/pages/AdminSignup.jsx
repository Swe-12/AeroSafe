import { useNavigate } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

const AdminSignup = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Placeholder for future integration with backend API
  }

  return (
    <main className="form-page">
      <section className="signup-card">
        <div className="signup-icon">
          <ShieldCheck aria-hidden="true" />
        </div>
        <h2>Admin Signup</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="admin-name">Name</label>
            <input id="admin-name" name="name" type="text" placeholder="Enter full name" required />
          </div>

          <div className="form-field">
            <label htmlFor="admin-email">Email ID</label>
            <input
              id="admin-email"
              name="email"
              type="email"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="admin-id">Admin ID</label>
            <input id="admin-id" name="adminId" type="text" placeholder="AS-ADM-001" required />
          </div>

          <div className="form-field">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="admin-confirm-password">Confirm Password</label>
            <input
              id="admin-confirm-password"
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
            aria-label="Switch to pilot signup"
            onClick={() => navigate('/pilot-signup')}
          >
            <span className="toggle-indicator" />
          </button>
          <p className="toggle-label">Pilot Signup</p>
        </div>
      </section>
    </main>
  )
}

export default AdminSignup


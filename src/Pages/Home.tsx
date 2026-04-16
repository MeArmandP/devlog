import { Link } from 'react-router-dom'
import SpaceChase from '../components/SpaceChase'

/**
 * Home page component
 * Landing page with profile banner, welcome message, and links to main sections
 */
export default function Home() {
  return (
    <>
      <SpaceChase />
      {/* Header with profile image, welcome text, and navigation links */}
      <header className="header">
        <div className="header-left">
          {/* Profile picture */}
          <img
            className="avatar"
            src={import.meta.env.BASE_URL + "picProfile.png"}
            alt="Profile"
          />

          <div>
            {/* Site title and subtitle */}
            <h1 className="name">DevLog</h1>

            <p className="subtitle">
              Documenting my journey learning backend development
            </p>

            {/* Navigation links to main pages and external profiles */}
            <nav className="profile-links">
              <Link to="/entries">Write an Entry</Link>
              <span className="profile-separator">|</span>
              <Link to="/about">About</Link>
              <span className="profile-separator">|</span>
              <a
                href="https://www.linkedin.com/in/armand-peters-4495a73a7"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main welcome content */}
      <main className="main">
        <div className="about">
          <h2>Welcome</h2>
          <p>
           Welcome to my Devlog, my own personal journey through tech. Shoes off at the door, grab a cup of coffee, and let's dive into the world of full stack development together. Here, I'll be sharing my experiences, challenges, and triumphs as I navigate the ever-evolving landscape of coding.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer>© 2026 DevLog (:</footer>
    </>
  )
}
import { Link } from 'react-router-dom'

/**
 * Navigation header component
 * Provides links to Home, Entries, and About pages
 */
export default function Header() {
  return (
    <header className="header">
      <nav>
        {/* Navigation links for main pages */}
        <Link to="/">Home</Link> | <Link to="/entries">Entries</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

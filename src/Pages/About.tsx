import { Link } from 'react-router-dom'

/**
 * About page component
 * Displays personal background, current role, and technology stack
 */
export default function About() {
  return (
    <>
      {/* Header with link back to home */}
      <header>
        <nav>
          <Link to="/">Back to Home</Link>
        </nav>
      </header>

      {/* About section with personal and professional information */}
      <main>
        <section>
          <h2>About</h2>
          <p>
            Hi! I'm a program management intern learning to collaborate and build front end web apps.
            I'm currently working through the SERN stack: SQL Server, Express, React, and Node.
          </p>
        </section>
      </main>
    </>
  )
}


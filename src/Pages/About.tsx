import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const powers = [
  { icon: '⚛️', label: 'React + TypeScript' },
  { icon: '🌿', label: 'Node.js / Express' },
  { icon: '🗄️', label: 'SQL Server + Prisma' },
  { icon: '🎨', label: 'CSS that (sometimes) cooperates' },
  { icon: '🏀', label: 'Basketball IQ — court vision transfers to debugging' },
  { icon: '📜', label: 'Deep mythology lore (Greek, Norse, Egyptian, Yoruba)' },
]

const weaknesses = [
  'CSS at 2am',
  'One more episode',
  'Rabbit-holing into pantheon research at midnight',
  'Forgetting semicolons in TypeScript',
]

export default function About() {
  return (
    <>
      <Header />
      <main className="page">
        <div className="origin-story">
          <div className="comic-panel">
            <span className="comic-panel-label">ORIGIN STORY</span>
            <h2>Who Am I?</h2>
            <p>
              Program management intern turned full-stack dev. I learn best by
              building — and by watching too much anime. Currently grinding
              through the SERN stack: SQL Server, Express, React, and Node.
            </p>
            <p style={{ marginTop: '12px' }}>
              Off the keyboard you'll find me on the court, deep in a manga arc,
              or arguing about which pantheon has the best lore (it's Yoruba,
              but don't tell Zeus).
            </p>
          </div>

          <div className="comic-panel">
            <span className="comic-panel-label">POWERS</span>
            <h2>Tech Stack</h2>
            <ul className="powers-list">
              {powers.map((p) => (
                <li key={p.label}>
                  <span>{p.icon}</span> {p.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="comic-panel">
            <span className="comic-panel-label">WEAKNESSES</span>
            <h2>Known Kryptonite</h2>
            <ul className="weaknesses-list">
              {weaknesses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>

          <div className="comic-panel">
            <span className="comic-panel-label">BASE OF OPERATIONS</span>
            <h2>Find Me</h2>
            <p>
              <a
                href="https://www.linkedin.com/in/armand-peters-4495a73a7"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {' · '}
              <Link to="/">Back to Home</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


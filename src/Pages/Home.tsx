import { Link } from 'react-router-dom'
import TypewriterSubtitle from '../components/TypewriterSubtitle'

const passions = [
  {
    icon: '🏀',
    title: 'Basketball',
    desc: 'The court is my reset button.',
    color: '#e67e22',
    glow: 'rgba(230, 126, 34, 0.25)',
    delay: '0.1s',
  },
  {
    icon: '⛩️',
    title: 'Anime',
    desc: 'Nakama, power-ups, and plot twists.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.25)',
    delay: '0.2s',
  },
  {
    icon: '⚡',
    title: 'Mythology',
    desc: 'Greek, Norse, Egyptian, Yoruba — all of it.',
    color: '#f5c518',
    glow: 'rgba(245, 197, 24, 0.25)',
    delay: '0.3s',
  },
  {
    icon: '🦸',
    title: 'Superheroes',
    desc: 'Comics are just modern mythology.',
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
    delay: '0.4s',
  },
]

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img
            className="avatar"
            src={import.meta.env.BASE_URL + 'picProfile.png'}
            alt="Profile"
          />
          <div>
            <h1 className="name">DevLog</h1>
            <TypewriterSubtitle />
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

      <main className="main">
        <div className="about">
          <h2>Welcome</h2>
          <p>
            Welcome to my Devlog — my personal journey through tech. Shoes off
            at the door, grab a cup of coffee, and let's dive into the world of
            full-stack development together.
          </p>
        </div>

        <p className="passion-section-title">What I'm About</p>
        <div className="passion-grid">
          {passions.map((p) => (
            <div
              key={p.title}
              className="passion-card"
              style={
                {
                  '--passion-color': p.color,
                  '--passion-glow': p.glow,
                  animationDelay: p.delay,
                } as React.CSSProperties
              }
            >
              <span className="passion-icon">{p.icon}</span>
              <span className="passion-title">{p.title}</span>
              <p className="passion-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>© 2026 DevLog (:</footer>
    </>
  )
}
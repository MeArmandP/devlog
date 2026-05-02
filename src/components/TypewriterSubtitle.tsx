import { useState, useEffect } from 'react'

const phrases = [
  'Full-stack dev in progress.',
  'Basketball head. The court is therapy.',
  'Anime is just animated mythology.',
  'Norse. Greek. Egyptian. Yoruba. All of it.',
  'Heroes wear capes. I wear a hoodie.',
  'SERN stack: SQL · Express · React · Node.',
]

export default function TypewriterSubtitle() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    if (!erasing) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(
          () => setDisplayed(phrase.slice(0, displayed.length + 1)),
          55
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setErasing(true), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
        return () => clearTimeout(t)
      } else {
        setErasing(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }
    }
  }, [displayed, erasing, phraseIndex])

  return (
    <p className="typewriter-subtitle">
      {displayed}
      <span className="cursor" aria-hidden="true">|</span>
    </p>
  )
}

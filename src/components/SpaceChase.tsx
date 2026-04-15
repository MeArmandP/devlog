import './SpaceChase.css'

export default function SpaceChase() {
  return (
    <div className="car-race" aria-hidden="true">
      {/* Lead car (red) — overhead view */}
      <div className="car car-red">
        <svg viewBox="0 0 40 90" width="40" height="90">
          {/* Shadow */}
          <ellipse cx="20" cy="48" rx="16" ry="42" fill="#000" opacity="0.1" />
          {/* Body */}
          <rect x="6" y="5" width="28" height="80" rx="12" fill="#d32f2f" />
          {/* Windshield */}
          <rect x="10" y="18" width="20" height="14" rx="6" fill="#81d4fa" opacity="0.8" />
          {/* Rear window */}
          <rect x="12" y="60" width="16" height="10" rx="4" fill="#81d4fa" opacity="0.6" />
          {/* Racing stripe */}
          <rect x="18" y="5" width="4" height="80" rx="2" fill="#fff" opacity="0.35" />
          {/* Front wheels */}
          <rect x="2" y="22" width="6" height="14" rx="3" fill="#222" />
          <rect x="32" y="22" width="6" height="14" rx="3" fill="#222" />
          {/* Rear wheels */}
          <rect x="2" y="58" width="6" height="14" rx="3" fill="#222" />
          <rect x="32" y="58" width="6" height="14" rx="3" fill="#222" />
          {/* Number */}
          <text x="20" y="52" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">7</text>
        </svg>
      </div>

      {/* Dust / tire marks */}
      <div className="dust dust-1" />
      <div className="dust dust-2" />
      <div className="dust dust-3" />

      {/* Chasing car (blue) — overhead view */}
      <div className="car car-blue">
        <svg viewBox="0 0 40 90" width="40" height="90">
          {/* Shadow */}
          <ellipse cx="20" cy="48" rx="16" ry="42" fill="#000" opacity="0.1" />
          {/* Body */}
          <rect x="6" y="5" width="28" height="80" rx="12" fill="#1565c0" />
          {/* Windshield */}
          <rect x="10" y="18" width="20" height="14" rx="6" fill="#81d4fa" opacity="0.8" />
          {/* Rear window */}
          <rect x="12" y="60" width="16" height="10" rx="4" fill="#81d4fa" opacity="0.6" />
          {/* Racing stripe */}
          <rect x="18" y="5" width="4" height="80" rx="2" fill="#fff" opacity="0.35" />
          {/* Front wheels */}
          <rect x="2" y="22" width="6" height="14" rx="3" fill="#222" />
          <rect x="32" y="22" width="6" height="14" rx="3" fill="#222" />
          {/* Rear wheels */}
          <rect x="2" y="58" width="6" height="14" rx="3" fill="#222" />
          <rect x="32" y="58" width="6" height="14" rx="3" fill="#222" />
          {/* Number */}
          <text x="20" y="52" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">3</text>
        </svg>
      </div>
    </div>
  )
}

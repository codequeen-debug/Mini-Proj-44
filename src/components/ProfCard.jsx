import { FaStar, FaBolt, FaRedo, FaInfoCircle } from 'react-icons/fa'

function Bar({ value, max = 5, color }) {
  return (
    <div style={{ flex: 1, backgroundColor: '#e5e7eb', borderRadius: 999, height: 6 }}>
      <div className="rating-bar" style={{ width: `${(value / max) * 100}%`, backgroundColor: color, height: 6, borderRadius: 999 }} />
    </div>
  )
}

export default function ProfCard({ prof, isSaved, onViewDetail }) {
  const ratingColor = prof.rating >= 4.5 ? '#10b981' : prof.rating >= 3.5 ? '#6366f1' : prof.rating >= 2.5 ? '#fbbd23' : '#f87272'

  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 24, width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
      {/* Image */}
      <div style={{ position: 'relative' }}>
        <img src={prof.avatar} alt={prof.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #ffffff, transparent)' }} />
        {isSaved && (
          <span style={{ position: 'absolute', top: 12, right: 12, backgroundColor: '#6366f1', color: '#fff', borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>
            ❤️ Saved
          </span>
        )}
        <span style={{ position: 'absolute', top: 12, left: 12, backgroundColor: '#00000010', color: '#374151', borderRadius: 999, padding: '3px 10px', fontSize: 12 }}>
          {prof.year}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', margin: 0 }}>{prof.name}</h2>
          <p style={{ color: '#6366f1', fontWeight: 500, fontSize: 14, margin: '2px 0' }}>{prof.subject}</p>
          <p style={{ color: '#4b5563', fontSize: 12, margin: 0 }}>{prof.department} · {prof.level}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div className="flex items-center gap-2">
            <FaStar style={{ color: '#fbbd23', fontSize: 12, width: 16, flexShrink: 0 }} />
            <Bar value={prof.rating} color="#6366f1" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', width: 28, textAlign: 'right' }}>{prof.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBolt style={{ color: '#fb923c', fontSize: 12, width: 16, flexShrink: 0 }} />
            <Bar value={prof.difficulty} color="#fbbd23" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', width: 28, textAlign: 'right' }}>{prof.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRedo style={{ color: '#36d399', fontSize: 12, width: 16, flexShrink: 0 }} />
            <Bar value={prof.wouldTakeAgain} max={100} color="#36d399" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', width: 36, textAlign: 'right' }}>{prof.wouldTakeAgain}%</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {prof.tags.map(tag => (
            <span key={tag} style={{ border: '1px solid #570df8', color: '#570df8', borderRadius: 999, padding: '2px 10px', fontSize: 11 }}>
              {tag}
            </span>
          ))}
        </div>

        <p style={{ color: '#6b7280', fontSize: 13, fontStyle: 'italic', lineHeight: 1.5, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          "{prof.reviews[0]}"
        </p>

        <button onClick={onViewDetail}
          style={{ marginTop: 'auto', background: 'none', border: 'none', color: '#570df8', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, padding: 0 }}>
          <FaInfoCircle /> View Details
        </button>
      </div>
    </div>
  )
}

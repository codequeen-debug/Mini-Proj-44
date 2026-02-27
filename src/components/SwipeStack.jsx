import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaTimes, FaStar, FaHeart } from 'react-icons/fa'
import ProfCard from './ProfCard'

function Modal({ prof, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: '#00000080', backdropFilter: 'blur(4px)' }} />
      <div style={{ position: 'relative', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 20, width: '100%', maxWidth: 500, maxHeight: '90vh', overflowY: 'auto', padding: 24, zIndex: 1 }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', color: '#4b5563', cursor: 'pointer', fontSize: 20 }}>✕</button>

        <div className="flex gap-4 items-start mb-4">
          <img src={prof.avatar} alt={prof.name} style={{ width: 80, height: 80, borderRadius: 16, objectFit: 'cover', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', margin: 0 }}>{prof.name}</h3>
            <p style={{ color: '#570df8', fontWeight: 500, margin: '4px 0 2px' }}>{prof.subject}</p>
            <p style={{ color: '#4b5563', fontSize: 13, margin: 0 }}>{prof.department} · {prof.level}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Rating', value: prof.rating, unit: '/ 5', color: '#570df8' },
            { label: 'Difficulty', value: prof.difficulty, unit: '/ 5', color: '#fbbd23' },
            { label: 'Again?', value: `${prof.wouldTakeAgain}%`, unit: 'would retake', color: '#36d399' },
          ].map(s => (
            <div key={s.label} style={{ backgroundColor: '#f3f4f6', borderRadius: 12, padding: 12 }}>
              <p style={{ color: '#4b5563', fontSize: 11, margin: '0 0 4px' }}>{s.label}</p>
              <p style={{ color: s.color, fontSize: 22, fontWeight: 700, margin: 0 }}>{s.value}</p>
              <p style={{ color: '#4b5563', fontSize: 11, margin: 0 }}>{s.unit}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {prof.tags.map(tag => (
            <span key={tag} style={{ border: '1px solid #570df8', color: '#570df8', borderRadius: 999, padding: '3px 12px', fontSize: 12 }}>{tag}</span>
          ))}
        </div>

        <p style={{ color: '#4b5563', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Reviews</p>
        {prof.reviews.map((r, i) => (
          <div key={i} style={{ backgroundColor: '#f3f4f6', borderRadius: 12, padding: 12, marginBottom: 8, fontSize: 14, fontStyle: 'italic', color: '#4b5563' }}>
            "{r}"
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SwipeStack({ professors, onSave, onReviewed, saved }) {
  const [index, setIndex] = useState(0)
  const [animClass, setAnimClass] = useState('')
  const [detailProf, setDetailProf] = useState(null)

  const current = professors[index]

  const animate = (cls, callback) => {
    setAnimClass(cls)
    setTimeout(() => { setAnimClass(''); callback() }, 400)
  }

  const handleSkip = () => {
    if (!current) return
    animate('fly-left', () => { onReviewed(current); setIndex(i => i + 1); toast('👈 Skipped!') })
  }

  const handleSave = () => {
    if (!current) return
    animate('fly-right', () => {
      onSave(current); onReviewed(current); setIndex(i => i + 1)
      toast(`❤️ ${current.name} saved!`)
    })
  }

  const handleTopPick = () => {
    if (!current) return
    animate('fly-up', () => {
      onSave(current); onReviewed(current); setIndex(i => i + 1)
      toast(`⭐ Top pick! ${current.name} saved!`)
    })
  }

  if (professors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div style={{ fontSize: 64 }}>🔍</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>No professors found</h2>
        <p style={{ color: '#4b5563' }}>Try adjusting your filters.</p>
      </div>
    )
  }

  if (index >= professors.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div style={{ fontSize: 64 }}>🎓</div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>You've seen them all!</h2>
        <p style={{ color: '#4b5563' }}>You went through all {professors.length} professors.</p>
        <button onClick={() => setIndex(0)}
          style={{ marginTop: 8, backgroundColor: '#570df8', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 24px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress */}
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div className="flex justify-between mb-1" style={{ fontSize: 12, color: '#4b5563' }}>
          <span>{index + 1} of {professors.length}</span>
          <span>{Math.round((index / professors.length) * 100)}% done</span>
        </div>
        <div style={{ backgroundColor: '#e5e7eb', borderRadius: 999, height: 6 }}>
          <div style={{ width: `${(index / professors.length) * 100}%`, backgroundColor: '#570df8', height: 6, borderRadius: 999, transition: 'width 0.3s ease' }} />
        </div>
      </div>

      {/* Card Stack */}
      <div style={{ position: 'relative', width: 360, height: 520 }}>
        {index + 1 < professors.length && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 24, transform: 'scale(0.95) translateY(12px)', zIndex: 0 }} />
        )}
        <div className={animClass} style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <ProfCard prof={current} isSaved={!!saved.find(p => p.id === current.id)} onViewDetail={() => setDetailProf(current)} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 items-center">
        {[
          { fn: handleSkip, label: <FaTimes />, bg: 'transparent', border: '2px solid #f87272', color: '#f87272', title: 'Skip' },
          { fn: handleTopPick, label: <FaStar />, bg: '#fbbd23', border: 'none', color: '#1f2937', title: 'Top Pick' },
          { fn: handleSave, label: <FaHeart />, bg: '#570df8', border: 'none', color: '#fff', title: 'Save' },
        ].map((b, i) => (
          <button key={i} onClick={b.fn} title={b.title}
            style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: b.bg, border: b.border, color: b.color, fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px #00000040', transition: 'transform 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            {b.label}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12, color: '#4b5563', marginTop: -8 }}>Skip &nbsp;·&nbsp; Top Pick &nbsp;·&nbsp; Save</p>

      {detailProf && <Modal prof={detailProf} onClose={() => setDetailProf(null)} />}
    </div>
  )
}

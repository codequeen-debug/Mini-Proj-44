export default function ReviewedList({ reviewed, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: '#00000080', backdropFilter: 'blur(4px)' }} />
      <div style={{ position: 'relative', backgroundColor: '#191e24', border: '1px solid #2a323c', borderRadius: 20, width: '100%', maxWidth: 480, maxHeight: '80vh', display: 'flex', flexDirection: 'column', zIndex: 1 }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #2a323c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', margin: 0 }}>✅ Reviewed</h3>
            <p style={{ color: '#6b7280', fontSize: 13, margin: 0 }}>{reviewed.length} professors swiped on</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 20 }}>✕</button>
        </div>

        <div style={{ overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {reviewed.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>👀</div>
              <p style={{ color: '#6b7280' }}>No professors reviewed yet.</p>
            </div>
          ) : reviewed.map(prof => (
            <div key={prof.id} style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: '#1d232a', borderRadius: 12, padding: 12 }}>
              <img src={prof.avatar} alt={prof.name} style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, color: '#fff', margin: 0, fontSize: 14 }}>{prof.name}</p>
                <p style={{ color: '#6b7280', fontSize: 12, margin: 0 }}>{prof.department} · {prof.level}</p>
              </div>
              <span style={{ backgroundColor: '#570df820', color: '#570df8', borderRadius: 999, padding: '2px 10px', fontSize: 12, fontWeight: 600 }}>⭐ {prof.rating}</span>
            </div>
          ))}
        </div>

        <div style={{ padding: 16, borderTop: '1px solid #2a323c' }}>
          <button onClick={onClose} style={{ width: '100%', backgroundColor: 'transparent', color: '#6b7280', border: '1px solid #2a323c', borderRadius: 8, padding: 10, cursor: 'pointer', fontWeight: 600 }}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

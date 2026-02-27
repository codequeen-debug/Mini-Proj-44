export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <div style={{ width: 360, height: 520, backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 24, overflow: 'hidden' }}>
        {/* Skeleton image */}
        <div style={{ width: '100%', height: 200, backgroundColor: '#e5e7eb', animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ height: 20, width: '70%', backgroundColor: '#e5e7eb', borderRadius: 8, animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ height: 16, width: '50%', backgroundColor: '#e5e7eb', borderRadius: 8, animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ height: 12, width: '35%', backgroundColor: '#e5e7eb', borderRadius: 8, animation: 'pulse 1.5s ease-in-out infinite' }} />
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ height: 8, backgroundColor: '#e5e7eb', borderRadius: 999, animation: 'pulse 1.5s ease-in-out infinite' }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {[80, 100, 70].map((w, i) => (
              <div key={i} style={{ height: 22, width: w, backgroundColor: '#e5e7eb', borderRadius: 999, animation: 'pulse 1.5s ease-in-out infinite' }} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#4b5563', fontSize: 14 }}>
        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6366f1', animation: 'bounce 0.8s ease-in-out infinite' }} />
        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6366f1', animation: 'bounce 0.8s ease-in-out 0.15s infinite' }} />
        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6366f1', animation: 'bounce 0.8s ease-in-out 0.3s infinite' }} />
        <span style={{ marginLeft: 4 }}>Loading professors...</span>
      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      `}</style>
    </div>
  )
}

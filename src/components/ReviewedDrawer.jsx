import { FaTimes, FaCheckCircle } from 'react-icons/fa'

export default function ReviewedDrawer({ isOpen, onClose, reviewed }) {
  return (
    <div className={`drawer drawer-end ${isOpen ? 'drawer-open' : ''}`} style={{ position: 'fixed', inset: 0, zIndex: 100, pointerEvents: isOpen ? 'auto' : 'none' }}>
      <input type="checkbox" className="drawer-toggle" readOnly checked={isOpen} />
      <div className="drawer-side">
        <label className="drawer-overlay" onClick={onClose} />
        <div className="menu bg-base-200 min-h-full w-80 p-0 flex flex-col">

          <div className="flex items-center justify-between p-4 border-b border-base-300">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-success" />
              <h2 className="font-display font-bold text-lg">Reviewed</h2>
              <div className="badge badge-success">{reviewed.length}</div>
            </div>
            <button className="btn btn-ghost btn-sm btn-circle" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {reviewed.length === 0 ? (
              <div className="text-center py-12 text-base-content/40">
                <div className="text-4xl mb-3">📋</div>
                <p className="text-sm">No professors reviewed yet.<br />Swipe through to get started!</p>
              </div>
            ) : (
              reviewed.map(prof => (
                <div key={prof.id} className="card bg-base-300 compact">
                  <div className="card-body flex-row items-center gap-3 p-3">
                    <img src={prof.avatar} alt={prof.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{prof.name}</p>
                      <p className="text-xs text-base-content/50 truncate">{prof.subject}</p>
                      <div className="badge badge-success badge-xs mt-1 gap-1">
                        <FaCheckCircle className="text-[10px]" /> Reviewed
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

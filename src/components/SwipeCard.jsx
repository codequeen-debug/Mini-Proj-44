import { FaStar, FaBolt, FaRedo } from 'react-icons/fa'

function RatingBar({ value, max = 5, color = 'primary' }) {
  const pct = (value / max) * 100
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-base-300 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-base-content/70 w-6 text-right">{value}</span>
    </div>
  )
}

export default function SwipeCard({ prof, style, onSwipe }) {
  const glowClass =
    prof.rating >= 4.5 ? 'rating-glow-high' :
    prof.rating >= 3.5 ? 'rating-glow-mid' :
    'rating-glow-low'

  const borderColor =
    prof.rating >= 4.5 ? 'border-green-500/30' :
    prof.rating >= 3.5 ? 'border-yellow-500/30' :
    'border-red-500/30'

  return (
    <div
      className={`card bg-base-200 border ${borderColor} ${glowClass} w-full h-full select-none overflow-hidden`}
      style={style}
    >
      {/* Avatar */}
      <figure className="relative h-52 overflow-hidden">
        <img
          src={prof.avatar}
          alt={prof.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <div className={`badge ${prof.wouldTakeAgain >= 80 ? 'badge-success' : prof.wouldTakeAgain >= 60 ? 'badge-warning' : 'badge-error'} gap-1 font-bold`}>
            <FaRedo className="text-xs" /> {prof.wouldTakeAgain}%
          </div>
        </div>
      </figure>

      <div className="card-body p-4 gap-3">
        {/* Name + dept */}
        <div>
          <h2 className="font-display text-lg font-bold leading-tight">{prof.name}</h2>
          <p className="text-primary text-sm font-medium">{prof.subject}</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <span className="badge badge-outline badge-sm">{prof.department}</span>
            <span className="badge badge-outline badge-sm">{prof.level}</span>
            <span className="badge badge-ghost badge-sm">{prof.year}</span>
          </div>
        </div>

        {/* Ratings */}
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-xs text-base-content/60 mb-1">
            <FaStar className="text-yellow-400" /> Rating
          </div>
          <RatingBar value={prof.rating} color="primary" />
          <div className="flex items-center gap-1 text-xs text-base-content/60 mb-1 mt-2">
            <FaBolt className="text-orange-400" /> Difficulty
          </div>
          <RatingBar value={prof.difficulty} color="warning" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {prof.tags.map(tag => (
            <span key={tag} className="badge badge-secondary badge-sm">{tag}</span>
          ))}
        </div>

        {/* Review quote */}
        <p className="text-xs text-base-content/50 italic border-l-2 border-primary/30 pl-2 line-clamp-2">
          "{prof.reviews[0]}"
        </p>
      </div>
    </div>
  )
}

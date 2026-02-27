import { FaFilter, FaSortAmountDown } from 'react-icons/fa'

const selectStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: 8,
  padding: '6px 12px',
  color: '#1f2937',
  fontSize: 14,
  cursor: 'pointer',
  minWidth: 140,
}

export default function FilterBar({ professors, filters, onChange }) {
  const departments = ['All', ...new Set(professors.map(p => p.department))].sort()
  const levels = ['All', 'Undergraduate', 'Graduate', 'PhD']
  const years = ['All', ...new Set(professors.map(p => p.year))].sort((a, b) => b - a)
  const update = (key, value) => onChange(prev => ({ ...prev, [key]: value }))

  return (
    <div className="bg-white border rounded-lg p-4 mb-6 flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
        <FaFilter />
        <span>Filter</span>
      </div>

      <select style={selectStyle} value={filters.department} onChange={e => update('department', e.target.value)}>
        <option value="All">All Departments</option>
        {departments.filter(d => d !== 'All').map(d => <option key={d} value={d}>{d}</option>)}
      </select>

      <select style={selectStyle} value={filters.level} onChange={e => update('level', e.target.value)}>
        {levels.map(l => <option key={l} value={l}>{l === 'All' ? 'All Levels' : l}</option>)}
      </select>

      <select style={selectStyle} value={filters.year} onChange={e => update('year', e.target.value)}>
        <option value="All">All Years</option>
        {years.filter(y => y !== 'All').map(y => <option key={y} value={y}>{y}</option>)}
      </select>

      <div className="flex items-center gap-2 text-pink-600 font-semibold text-sm">
        <FaSortAmountDown />
        <span>Sort</span>
      </div>

      <select style={selectStyle} value={filters.sortBy} onChange={e => update('sortBy', e.target.value)}>
        <option value="rating">Highest Rated</option>
        <option value="name">Name A–Z</option>
      </select>
    </div>
  )
}

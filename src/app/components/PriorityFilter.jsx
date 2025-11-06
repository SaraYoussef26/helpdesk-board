'use client';

export default function PriorityFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      <option value="All">All</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
      <option value="Critical">Critical</option>
    </select>
  );
}
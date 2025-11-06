'use client';

export default function StatusFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="On Hold">On Hold</option>
      <option value="Resolved">Resolved</option>
    </select>
  );
}
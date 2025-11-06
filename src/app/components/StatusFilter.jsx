'use client';

export default function StatusFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1"
    >
      <option>All</option>
      <option>Open</option>
      <option>In Progress</option>
      <option>On Hold</option>
      <option>Resolved</option>
    </select>
  );
}
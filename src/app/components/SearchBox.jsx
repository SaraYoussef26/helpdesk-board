'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1 flex-1"
    />
  );
}
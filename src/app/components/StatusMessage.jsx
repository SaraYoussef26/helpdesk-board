'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return <p className="text-gray-700">Loading…</p>;
  }

  if (error) {
    return <p className="text-red-600">Unable to load tickets.</p>;
  }

  if (isEmpty) {
    return <p className="text-gray-500">No tickets match your filters.</p>;
  }

  return null;
}
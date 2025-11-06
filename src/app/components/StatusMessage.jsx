'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p className="text-red-600">Unable to load tickets.</p>;
  if (isEmpty) return <p>No tickets match your filters.</p>;
  return null;
}
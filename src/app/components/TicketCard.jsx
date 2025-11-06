'use client';

export default function TicketCard({ ticket, inQueue, onAddToQueue }) {
  return (
    <li className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold text-lg">{ticket.title}</h3>
      <p className="text-sm text-gray-700">{ticket.description}</p>
      <p className="text-sm mt-1">
        <strong>Priority:</strong> {ticket.priority} |{' '}
        <strong>Status:</strong> {ticket.status} |{' '}
        <strong>Assignee:</strong> {ticket.assignee}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Last updated: {new Date(ticket.updatedAt).toLocaleString()}
      </p>

      <button
        onClick={() => onAddToQueue(ticket.id)}
        disabled={inQueue}
        className={`mt-2 px-3 py-1 rounded ${
          inQueue ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
        }`}
      >
        {inQueue ? 'Added to Queue' : 'Add to My Queue'}
      </button>

      {inQueue && <p className="text-xs text-green-600 mt-1">Already in your queue</p>}
    </li>
  );
}
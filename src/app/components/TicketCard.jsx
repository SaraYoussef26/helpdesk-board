'use client';

export default function TicketCard({ ticket, inQueue, onAddToQueue }) {
  return (
    <li className="border p-2 rounded">
      <h3 className="font-semibold">{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>
        <strong>Priority:</strong> {ticket.priority} |{' '}
        <strong>Status:</strong> {ticket.status} |{' '}
        <strong>Assignee:</strong> {ticket.assignee}
      </p>
      <button
        onClick={() => onAddToQueue(ticket.id)}
        disabled={inQueue}
        className={`mt-2 px-2 py-1 rounded ${
          inQueue ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
        }`}
      >
        {inQueue ? 'Added' : 'Add to My Queue'}
      </button>
    </li>
  );
}
'use client';

export default function MyQueueSummary({ tickets, queue, removeFromQueue, clearQueue }) {
  const queuedTicketIds = Object.keys(queue);

  const queuedTickets = queuedTicketIds.map((id) => tickets.find((t) => t.id === id));

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="font-semibold text-lg">My Queue ({queuedTicketIds.length})</h3>

      {queuedTickets.length === 0 ? (
        <p className="text-gray-500 mt-2">No tickets in your queue.</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {queuedTickets.map((ticket) => (
            <li key={ticket.id} className="flex justify-between items-center border-b pb-1">
              <span>{ticket.title}</span>
              <button
                onClick={() => removeFromQueue(ticket.id)}
                className="text-red-600 px-1 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {queuedTickets.length > 0 && (
        <button
          onClick={clearQueue}
          className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
        >
          Clear Queue
        </button>
      )}
    </div>
  );
}
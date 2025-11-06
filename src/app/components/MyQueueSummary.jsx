'use client';

export default function MyQueueSummary({ tickets, queue, removeFromQueue, clearQueue }) {
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="font-semibold">My Queue ({Object.keys(queue).length})</h3>
      <ul>
        {Object.keys(queue).map((ticketId) => {
          const ticket = tickets.find((t) => t.id === ticketId);
          return (
            <li key={ticketId} className="flex justify-between">
              <span>{ticket?.title}</span>
              <button onClick={() => removeFromQueue(ticketId)} className="text-red-600 px-1">
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      {Object.keys(queue).length > 0 && (
        <button onClick={clearQueue} className="mt-2 bg-red-500 text-white px-2 py-1 rounded">
          Clear Queue
        </button>
      )}
    </div>
  );
}
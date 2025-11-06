'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, queue, onAddToQueue }) {
  return (
    <ul className="space-y-4">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}           // stable key!
          ticket={ticket}
          inQueue={!!queue[ticket.id]}
          onAddToQueue={onAddToQueue}
        />
      ))}
    </ul>
  );
}
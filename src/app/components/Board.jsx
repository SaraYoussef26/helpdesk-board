'use client';

import React, { useState, useEffect } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import StatusMessage from './StatusMessage';
import MyQueueSummary from './MyQueueSummary';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

  const visibleTickets = tickets.filter((ticket) => {
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
    const matchesSearch =
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.description.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const addToQueue = (ticketId) => setQueue((prev) => ({ ...prev, [ticketId]: true }));
  const removeFromQueue = (ticketId) =>
    setQueue((prev) => {
      const copy = { ...prev };
      delete copy[ticketId];
      return copy;
    });
  const clearQueue = () => setQueue({});

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Helpdesk Board</h2>

      <div className="flex gap-4 mb-4">
        <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        <PriorityFilter value={priorityFilter} onChange={setPriorityFilter} />
        <SearchBox value={search} onChange={setSearch} />
      </div>

      <StatusMessage loading={loading} error={error} isEmpty={!loading && !error && visibleTickets.length === 0} />

      <TicketList tickets={visibleTickets} queue={queue} onAddToQueue={addToQueue} />

      <MyQueueSummary
        tickets={tickets}
        queue={queue}
        removeFromQueue={removeFromQueue}
        clearQueue={clearQueue}
      />
    </div>
  );
}
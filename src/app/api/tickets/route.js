export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing',
      description: 'Outlook not syncing on mobile device.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Ashley',
      updatedAt: '2025-10-30T10:15:00Z'
    },
    {
      id: 't-1003',
      title: 'Forgot password',
      description: 'User cannot log into system, forgot password.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Steven',
      updatedAt: '2025-10-29T09:00:00Z'
    },
    {
      id: 't-1004',
      title: 'Laptop won’t boot',
      description: 'Laptop stuck on BIOS screen.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:45:00Z'
    },
    {
      id: 't-1005',
      title: 'Printer offline',
      description: 'Shared office printer not responding.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Matthew',
      updatedAt: '2025-10-28T14:20:00Z'
    },
    {
      id: 't-1006',
      title: 'Software installation request',
      description: 'Request to install Adobe Photoshop.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T11:30:00Z'
    },
    {
      id: 't-1007',
      title: 'Server downtime',
      description: 'Production server is down intermittently.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'David',
      updatedAt: '2025-10-31T12:05:00Z'
    },
    {
      id: 't-1008',
      title: 'Network slow',
      description: 'Internet connection is very slow in office.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-30T16:45:00Z'
    },
    {
      id: 't-1009',
      title: 'Access request',
      description: 'User needs access to shared folder.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Eva',
      updatedAt: '2025-10-29T15:10:00Z'
    },
    {
      id: 't-1010',
      title: 'Keyboard not working',
      description: 'Keys stuck or unresponsive.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T13:25:00Z'
    },
    {
      id: 't-1011',
      title: 'Monitor flickering',
      description: 'Screen flickers intermittently.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'John',
      updatedAt: '2025-10-30T09:55:00Z'
    },
    {
      id: 't-1012',
      title: 'VPN disconnects randomly',
      description: 'VPN drops connection every few minutes.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Olivia',
      updatedAt: '2025-10-31T14:00:00Z'
    }
  ];

  return Response.json(tickets);
}
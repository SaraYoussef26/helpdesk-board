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
      title: 'Email not syncing on mobile',
      description: 'Outlook not syncing on mobile device.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Ashley',
      updatedAt: '2025-10-30T10:15:00Z'
    },
    {
      id: 't-1003',
      title: 'Zoom audio echoes',
      description: 'Severe echo reported by multiple attendees.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Steven',
      updatedAt: '2025-10-29T09:00:00Z'
    },
    {
      id: 't-1004',
      title: 'Laptop battery drains quickly',
      description: 'Battery drops fromm 100% to 30% in 2 hours.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:45:00Z'
    },
    {
      id: 't-1005',
      title: 'Teams screen share fails',
      description: 'Sharing starts and immediately stops.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Matthew',
      updatedAt: '2025-10-28T14:20:00Z'
    },
    {
      id: 't-1006',
      title: 'MacOS update failing',
      description: 'Installer quits at 60%.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T11:30:00Z'
    },
    {
      id: 't-1007',
      title: 'Shared drive permissions',
      description: 'Access denied for new project members.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'David',
      updatedAt: '2025-10-31T12:05:00Z'
    },
    {
      id: 't-1008',
      title: 'Locked out of Salesforce',
      description: 'User cannot complete MFA push',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-30T16:45:00Z'
    },
    {
      id: 't-1009',
      title: 'Wi-Fi drops in Conference Room A',
      description: 'Signal fluctuates during large meetings.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Eva',
      updatedAt: '2025-10-29T15:10:00Z'
    },
    {
      id: 't-1010',
      title: 'Calender invites not delivered',
      description: 'Invites arrive hours later.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T13:25:00Z'
    },
    {
      id: 't-1011',
      title: 'Slack notifications delayed',
      description: 'Messages notify several minutes late.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'John',
      updatedAt: '2025-10-30T09:55:00Z'
    },
    {
      id: 't-1012',
      title: 'Printer not responding on Floor 3',
      description: 'Queue stuck and jobs timing out.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Olivia',
      updatedAt: '2025-10-31T14:00:00Z'
    }
  ];

  return Response.json(tickets);
}
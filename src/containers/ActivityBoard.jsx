
import React, { useState } from 'react';
import { Container, Tab, Tabs, Box } from '@material-ui/core';
import ActivityFeed from '../components/ActivityFeed.jsx';
import ActivityDetail from '../components/ActivityDetail.jsx';
import ArchivedCalls from '../components/ArchivedCalls.jsx';

const ActivityBoard = ({ }) => {
  const [selectedCall, setSelectedCall] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  const handleArchive = (id) => {
    if (id === 'all') {
      fetch('https://aircall-backend.onrender.com/activities')
        .then(response => response.json())
        .then(data => {
          data.forEach(call => {
            if (!call.is_archived) {
              fetch(`https://aircall-backend.onrender.com/activities/${call.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_archived: true })
              });
            }
          });
        });
    } else {
      fetch(`https://aircall-backend.onrender.com/activities/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_archived: true })
      });
    }
  };

  const handleUnarchive = (id) => {
    if (id === 'all') {
      fetch('https://aircall-backend.onrender.com/activities')
        .then(response => response.json())
        .then(data => {
          data.forEach(call => {
            if (call.is_archived) {
              fetch(`https://aircall-backend.onrender.com/activities/${call.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_archived: false })
              });
            }
          });
        });
    } else {
      fetch(`https://aircall-backend.onrender.com/activities/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_archived: false })
      });
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="simple tabs example">
        <Tab label="Activity Feed" />
        <Tab label="Archived Calls" />
      </Tabs>
      <Box>
        {tabIndex === 0 && <ActivityFeed onArchive={handleArchive} />}
        {tabIndex === 1 && <ArchivedCalls onUnarchive={handleUnarchive} />}
      </Box>
      {selectedCall && <ActivityDetail callId={selectedCall} onClose={() => setSelectedCall(null)} />}
    </Container>
  );
};

export default ActivityBoard;

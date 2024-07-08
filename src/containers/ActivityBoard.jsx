import React, { useState } from 'react';
import { Container, Typography, Tab, Tabs, Box } from '@material-ui/core';
import ActivityFeed from '../components/ActivityFeed.jsx';
import ActivityDetail from '../components/ActivityDetail.jsx';
import ArchivedCalls from '../components/ArchivedCalls.jsx';

function App() {
  const [selectedCall, setSelectedCall] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const switchToArchivedTab = () => {
    setTabValue(1);
  };
  const switchToUnarchivedTab = () => {
    setTabValue(0);
  };

  return (
    <Container>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Activity Feed" />
        <Tab label="Archived Calls" />
      </Tabs>
      <Box>
        {tabValue === 0 && <ActivityFeed onArchive={switchToArchivedTab} />}
        {tabValue === 1 && <ArchivedCalls onUnarchive={switchToUnarchivedTab} />}
      </Box>
      {selectedCall && (
        <ActivityDetail callId={selectedCall} onClose={() => setSelectedCall(null)} />
      )}
    </Container>
  );
}

export default App;

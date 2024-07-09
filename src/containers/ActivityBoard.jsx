import React, { useState } from "react";
import { Container, Tab, Tabs, Box } from "@material-ui/core";
import ActivityFeed from "../components/ActivityFeed.jsx";
import ArchivedCalls from "../components/ArchivedCalls.jsx";

function ActivityBoard() {
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
        {tabValue === 1 && (
          <ArchivedCalls onUnarchive={switchToUnarchivedTab} />
        )}
      </Box>
    </Container>
  );
}

export default ActivityBoard;

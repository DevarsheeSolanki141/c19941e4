import React, { useState } from "react";
import ActivityFeed from "../components/ActivityFeed.jsx";
import ArchivedFeed from "../components/ArchivedFeed.jsx";
// Importing Material-UI components and colors
import { Container, Tab, Tabs, Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#52b202",
    },
    secondary: {
      main: "#9e9e9e",
    },
  },
  status: {
    danger: "#b22a00",
  },
});

function ActivityBoard() {
  // State to keep track of the currently selected tab
  const [tabValue, setTabValue] = useState(0);

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Function to switch to the archived tab
  const switchToArchivedTab = () => {
    setTabValue(1);
  };

  // Function to switch to the unarchived tab
  const switchToUnarchivedTab = () => {
    setTabValue(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* Tabs component to switch between Activity Feed and Archived Calls */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
        >
          <Tab label="Activity Feed" />
          <Tab label="Archived Calls" />
        </Tabs>
        <Box>
          {tabValue === 0 && <ActivityFeed onArchive={switchToArchivedTab} />}
          {tabValue === 1 && (
            <ArchivedFeed onUnarchive={switchToUnarchivedTab} />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ActivityBoard;

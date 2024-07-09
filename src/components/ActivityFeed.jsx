import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCalls, updateCall } from "../redux/actions";
import CallWidget from "./common/CallWidget.jsx";
// Importing Material-UI components and icons
import { List, Button, Box } from "@material-ui/core";
import ArchiveIcon from "@material-ui/icons/Archive";
import { makeStyles } from "@material-ui/core/styles";

// Creating custom styles using Material-UI's makeStyles
const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
  },
}));

// ActivityFeed component that takes activities, onArchive, and onUnarchive as props
const ActivityFeed = ({ onArchive }) => {
  const classes = useStyles(); // Using custom style
  const dispatch = useDispatch();
  // Selector to get unarchived calls from the Redux store
  const calls = useSelector((state) =>
    state.calls.calls.filter((call) => !call.is_archived)
  );
  // Selector to get the status of the calls
  const callStatus = useSelector((state) => state.calls.status);

  useEffect(() => {
    if (callStatus === "idle") {
      dispatch(fetchCalls());
    }
  }, [calls, dispatch]);

  const handleArchive = (id) => {
    if (id === "all") {
      // archive all calls
      calls.forEach((call) => {
        dispatch(updateCall({ id: call.id, is_archived: true }));
      });
    } else {
      // archive a single call
      dispatch(updateCall({ id, is_archived: true }));
    }
    onArchive(); // Callback to switch to the archived tab
  };

  return (
    <Box>
      <Box mb={2} mt={2}>
        <Button
          variant="contained"
          startIcon={<ArchiveIcon />}
          className={classes.button}
          onClick={() => handleArchive("all")}
        >
          Archive all calls
        </Button>
      </Box>
      <List>
        {calls.map((call) => (
          <CallWidget
            key={call.id}
            call={call}
            actionBtn="Archive"
            handleClick={handleArchive}
          ></CallWidget>
        ))}
      </List>
    </Box>
  );
};

export default ActivityFeed;

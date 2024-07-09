import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCalls, updateCall } from "../redux/actions.js";
import CallWidget from "./common/CallWidget.jsx";
// Importing Material-UI components and icons
import { List, Button, Box } from "@material-ui/core";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import { makeStyles } from "@material-ui/core/styles";

// Creating custom styles using Material-UI's makeStyles
const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
  },
}));

const ArchivedFeed = ({ onUnarchive }) => {
  const classes = useStyles(); // Using custom style
  const dispatch = useDispatch();
  // Selector to get archived calls from the Redux store
  const calls = useSelector((state) =>
    state.calls.calls.filter((call) => call.is_archived)
  );
  // Selector to get the status of the calls
  const callStatus = useSelector((state) => state.calls.status);

  useEffect(() => {
    if (callStatus === "idle") {
      dispatch(fetchCalls());
    }
  }, [callStatus, dispatch]);

  const handleUnarchive = (id) => {
    if (id === "all") {
      // Unarchive all calls
      calls.forEach((call) => {
        dispatch(updateCall({ id: call.id, is_archived: false }));
      });
    } else {
      // Unarchive a single call
      dispatch(updateCall({ id, is_archived: false }));
    }
    onUnarchive(); // Callback to switch to the unarchived tab
  };

  return (
    <Box>
      <Box mb={2} mt={2}>
        <Button
          variant="contained"
          startIcon={<UnarchiveIcon />}
          className={classes.button}
          onClick={() => handleUnarchive("all")}
        >
          Unarchive all calls
        </Button>
      </Box>
      <List>
        {calls.map((call) => (
          <CallWidget
            key={call.id}
            call={call}
            actionBtn="Unarchive"
            handleClick={handleUnarchive}
          ></CallWidget>
        ))}
      </List>
    </Box>
  );
};

export default ArchivedFeed;

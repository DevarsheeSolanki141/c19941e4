import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button, Box } from "@material-ui/core";
import { fetchCalls, updateCall } from "../redux/actions";
import ArchiveIcon from "@material-ui/icons/Archive";
import { makeStyles } from "@material-ui/core/styles";
import CallWidget from "./common/CallWidget.jsx";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const ActivityFeed = ({ onArchive }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const calls = useSelector((state) =>
    state.calls.calls.filter((call) => !call.is_archived)
  );
  const callStatus = useSelector((state) => state.calls.status);

  useEffect(() => {
    if (callStatus === "idle") {
      dispatch(fetchCalls());
    }
  }, [calls, dispatch]);

  const handleArchive = (id) => {
    if (id === "all") {
      calls.forEach((call) => {
        dispatch(updateCall({ id: call.id, is_archived: true }));
      });
    } else {
      dispatch(updateCall({ id, is_archived: true }));
    }
    onArchive();
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

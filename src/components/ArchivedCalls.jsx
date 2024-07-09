import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button, Box } from "@material-ui/core";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import { makeStyles } from "@material-ui/core/styles";
import CallWidget from "./common/CallWidget.jsx";
import { fetchCalls, updateCall } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const ArchivedCalls = ({ onUnarchive }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const calls = useSelector((state) =>
    state.calls.calls.filter((call) => call.is_archived)
  );
  const callStatus = useSelector((state) => state.calls.status);

  useEffect(() => {
    if (callStatus === "idle") {
      dispatch(fetchCalls());
    }
  }, [callStatus, dispatch]);

  const handleUnarchive = (id) => {
    if (id === "all") {
      calls.forEach((call) => {
        dispatch(updateCall({ id: call.id, is_archived: false }));
      });
    } else {
      dispatch(updateCall({ id, is_archived: false }));
    }
    onUnarchive();
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

export default ArchivedCalls;

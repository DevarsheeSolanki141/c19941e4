import React from "react";
import ActivityDetail from "./ActivityDetail.jsx";
// Importing Material-UI components, colors and icons
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";
import PhoneCallbackRoundedIcon from "@material-ui/icons/PhoneCallbackRounded";
import PhoneForwardedRoundedIcon from "@material-ui/icons/PhoneForwardedRounded";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

// Creating custom styles using Material-UI's makeStyles
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const CallWidget = ({ call, actionBtn, handleClick }) => {
  const classes = useStyles(); // Using custom style
  const [open, setOpen] = React.useState(false); // State to manage the dialog open/close

  // Function to open the ActivityDetail dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the ActivityDetail dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {call && (
        <Box p={1}>
          <Paper elevation={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {call.direction === "inbound" ? (
                    // Display inbound call icon
                    <PhoneCallbackRoundedIcon
                      fontSize="small"
                      color="primary"
                    />
                  ) : (
                    // Display outbound call icon
                    <PhoneForwardedRoundedIcon
                      fontSize="small"
                      color="primary"
                    />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={call.from} />
              <ListItemSecondaryAction>
                <Typography component="div">
                  <Box fontSize={12} fontWeight={900} color="secondary">
                    {call.duration} min
                    <IconButton
                      onClick={handleClickOpen}
                      aria-label="upload picture"
                      component="span"
                    >
                      <InfoIcon />
                    </IconButton>
                    <ActivityDetail
                      open={open}
                      onClose={handleClose}
                      className={classes.paper}
                      callDetail={call}
                      actionBtn={actionBtn}
                      handleClick={handleClick}
                    />
                  </Box>
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        </Box>
      )}
    </React.Fragment>
  );
};

export default CallWidget;

import React from "react";
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
import { green, grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import ActivityDetail from "../ActivityDetail.jsx";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const CallWidget = ({ call, actionBtn, handleClick }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {call && (
        <Box p={1}>
          <Paper elevation={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {call.direction === "inbound" ? (
                    <PhoneCallbackRoundedIcon
                      fontSize="small"
                      style={{ color: green[500] }}
                    />
                  ) : (
                    <PhoneForwardedRoundedIcon
                      fontSize="small"
                      style={{ color: green[500] }}
                    />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={call.from} />
              <ListItemSecondaryAction>
                <Typography component="div">
                  <Box
                    fontSize={12}
                    fontWeight={900}
                    style={{ color: grey[500] }}
                  >
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
    </>
  );
};

export default CallWidget;

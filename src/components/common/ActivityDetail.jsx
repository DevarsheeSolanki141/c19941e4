import React from "react";
// Importing Material-UI components and colors
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";

const ActivityDetail = ({
  open,
  actionBtn,
  callDetail,
  handleClick,
  onClose,
}) => {
  const d = new Date(callDetail.created_at);
  const dtfUS = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Call Details"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          From: {callDetail.from}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          To: {callDetail.to}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Date/Time: {dtfUS.format(d)}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Type: {callDetail.call_type}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Duration: {callDetail.duration} min
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Archived: {callDetail.is_archived ? "Yes" : "No"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClick(callDetail.id)} color="primary">
          {actionBtn}
        </Button>
        <Button onClick={onClose} style={{ color: red[500] }} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActivityDetail;

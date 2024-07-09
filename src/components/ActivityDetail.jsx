import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const ActivityDetail = ({
  open,
  actionBtn,
  callDetail,
  handleClick,
  onClose,
}) => {
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
          Date: {callDetail.created_at}
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
        <Button onClick={onClose} color="primary" autoFocus>
          Calcel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActivityDetail;

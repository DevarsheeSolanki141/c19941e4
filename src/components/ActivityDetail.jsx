import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import axios from 'axios';

const ActivityDetail = ({ callId, onClose }) => {
  const [call, setCall] = useState(null);

  useEffect(() => {
    axios.get(`https://aircall-backend.onrender.com/activities/${callId}`)
      .then(response => setCall(response.data))
      .catch(error => console.error('Error fetching call details:', error));
  }, [callId]);

  if (!call) return <Typography>Loading...</Typography>;

  return (
    <div>
      <Typography variant="h6">{call.from}</Typography>
      <Typography variant="body1">{call.call_type}</Typography>
      <Typography variant="body1">{call.time}</Typography>
      <Typography variant="body1">{call.duration}</Typography>
      <Button variant="contained" onClick={onClose}>Close</Button>
    </div>
  );
};

export default ActivityDetail;

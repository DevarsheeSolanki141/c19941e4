import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider } from '@material-ui/core';

const ActivityFeed = ({ onArchive }) => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch('https://aircall-backend.onrender.com/activities')
      .then(response => response.json())
      .then(data => setCalls(data))
      .catch(error => console.error('Error fetching calls:', error));
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => onArchive('all')}>Archive All</Button>
      <List>
        {calls && calls.filter(call => !call.is_archived).map(call => (
          <React.Fragment key={call.id}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>{call.from}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={call.from} secondary={`${call.call_type} - ${call.time}`} />
              <Button variant="contained" color="secondary" onClick={() => onArchive(call.id)}>Archive</Button>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default ActivityFeed;

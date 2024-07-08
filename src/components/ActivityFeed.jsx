import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider } from '@material-ui/core';
import { fetchCalls, updateCall } from '../redux/actions';

const ActivityFeed = ({ onArchive }) => {
    const dispatch = useDispatch();
    const calls = useSelector((state) => state.calls.calls.filter((call) => !call.is_archived));
    const callStatus = useSelector((state) => state.calls.status);

    useEffect(() => {
        if (callStatus === 'idle') {
            dispatch(fetchCalls());
        }
    }, [calls, dispatch]);

    const handleArchive = (id) => {
        if (id === 'all') {
            calls.forEach((call) => {
                dispatch(updateCall({ id: call.id, is_archived: true }));
            });
        } else {
            dispatch(updateCall({ id, is_archived: true }));
        }
        onArchive();
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => handleArchive('all')}>Archive All</Button>
            <List>
                {calls.map(call => (
                    <React.Fragment key={call.id}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>{call.from}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={call.to} secondary={`${call.call_type} - ${call.duration}`} />
                            <Button variant="contained" color="secondary" onClick={() => handleArchive(call.id)}>Archive</Button>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
};

export default ActivityFeed;

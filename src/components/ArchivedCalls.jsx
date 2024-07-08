import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider } from '@material-ui/core';
import { fetchCalls, updateCall } from '../redux/actions';

const ArchivedCalls = ({ onUnarchive }) => {
    const dispatch = useDispatch();
    const calls = useSelector((state) => state.calls.calls.filter((call) => call.is_archived));
    const callStatus = useSelector((state) => state.calls.status);

    useEffect(() => {
        if (callStatus === 'idle') {
            dispatch(fetchCalls());
        }
    }, [callStatus, dispatch]);

    const handleUnarchive = (id) => {
        if (id === 'all') {
            calls.forEach((call) => {
                dispatch(updateCall({ id: call.id, is_archived: false }));
            });
        } else {
            dispatch(updateCall({ id, is_archived: false }));
        }
        onUnarchive();
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => handleUnarchive('all')}>Unarchive All</Button>
            <List>
                {calls.map(call => (
                    <React.Fragment key={call.id}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>{call.from}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={call.to} secondary={`${call.call_type} - ${call.duration}`} />
                            <Button variant="contained" color="secondary" onClick={() => handleUnarchive(call.id)}>Unarchive</Button>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
};

export default ArchivedCalls;

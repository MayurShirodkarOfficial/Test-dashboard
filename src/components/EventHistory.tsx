import { Box, Divider, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import StatusButton from "./StatusButton";

const EventHistory = () => {
    const [eventHistory, setEventHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://retoolapi.dev/TYjDIe/eventhistory")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch event history');
                }
                return response.json();
            })
            .then(data => {
                setEventHistory(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const timeAgo = (timestamp:any) => {
        const now = new Date();
        const seconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval >= 1) {
            return `${interval} year${interval > 1 ? 's' : ''} ago`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return `${interval} month${interval > 1 ? 's' : ''} ago`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return `${interval} day${interval > 1 ? 's' : ''} ago`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return `${interval} hour${interval > 1 ? 's' : ''} ago`;
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return `${interval} minute${interval > 1 ? 's' : ''} ago`;
        }
        return `${Math.floor(seconds)} sec${Math.floor(seconds) > 1 ? 's' : ''} ago`;
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="body1" color="error">{error}</Typography>;
    }

    // Filter out future timestamps before rendering
    const filteredEventHistory = eventHistory.filter((event:any) => {
        const eventTimestamp = new Date(parseInt(event.timestamp) * 1000);
        return eventTimestamp <= new Date(); // Filter out future timestamps
    });

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                zIndex: 10,
                height: '30rem',
                width: '50%',
                border: "1px solid #F0F0F0",
                marginTop: "1rem",
                borderRadius: "6px",
               
            }}
        >
            <Typography variant="h6" sx={{ textAlign: "left", padding: "0.5rem", fontWeight: "600", color: "gray" }}>Event History</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography sx={{ flexGrow: 1, width: '30%', padding: "0.5rem", textAlign: 'center', fontWeight: 800 }}>
                    Event
                </Typography>
                <Typography sx={{ flexGrow: 1, width: '30%', padding: "0.5rem", textAlign: 'center', fontWeight: 800 }}>
                    Version
                </Typography>
                <Typography sx={{ flexGrow: 1, width: '30%', padding: "0.5rem", textAlign: 'center', fontWeight: 800 }}>
                    Status
                </Typography>
            </Box>
            <Box sx={{backgroundColor: '#FFFFFF',
                zIndex: 10,
                height: '20rem',
                width: '100%',
                marginTop: "1rem",
                borderRadius: "6px",
                overflowY: "auto"}}>
            {filteredEventHistory.map((event:any, index) => (
                <React.Fragment key={index}>
                    <Divider sx={{ backgroundColor: '#D3D3D3', margin: '10px', padding: '0.5px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', padding: '1rem', gap: 20 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '4rem' }}>
                            <Typography sx={{ textAlign: 'center' }}>{event.event}</Typography>
                            <Typography sx={{ textAlign: 'right' }}>{timeAgo(new Date(parseInt(event.timestamp) * 1000))}</Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center' }}>{event.version}</Typography>
                        <StatusButton status={event.status}/>
                        {/* <Typography sx={{ textAlign: 'center' }}>{event.status}</Typography> */}
                    </Box>
                </React.Fragment>
            ))}
            </Box>
            <Typography sx={{paddingLeft:'75px',marginTop:'5px', textDecoration: 'underline', color: 'purple' }}>View More</Typography>
        </Box>
    );
};

export default EventHistory;

import { Box, Divider, Typography } from "@mui/material";
import React,{ useEffect, useState } from "react";

const EventHistory = () => {
    const [eventHistory, setEventHistory] = useState([]);

    useEffect(() => {
        fetch("https://retoolapi.dev/TYjDIe/eventhistory")
            .then(response => response.json())
            .then(data => setEventHistory(data))
            .catch(error => console.error("Error fetching event history:", error));
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                zIndex:10,
                height: '30rem',
                width: '50%',
                border: "1px solid #F0F0F0",
                marginTop: "1rem",
                borderRadius: "6px",
                overflowY: "auto", // Add overflowY for vertical scrolling
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
            {eventHistory.map((event:any) => (
                <React.Fragment key={event.id}>
                    <Divider sx={{ backgroundColor: '#D3D3D3', margin: '10px', padding: '0.5px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', padding: '1rem', gap: 20 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '4rem' }}>
                            <Typography sx={{ textAlign: 'center' }}>{event.event}</Typography>
                            <Typography sx={{ textAlign: 'right' }}>{event.timestamp}</Typography>
                        </Box>
                        <Typography sx={{ textAlign: 'center' }}>{event.version}</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{event.status}</Typography>
                    </Box>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default EventHistory;

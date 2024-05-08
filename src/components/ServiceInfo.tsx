import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useContext } from "react";
import { DashBoardContext } from "../context/dashboard";

const ServiceInfo = () => {
    const { currentApplication } = useContext(DashBoardContext);
    const convertTimestamp = (timestamp: any) => {
        const currentTimestamp = Math.floor(Date.now() / 1000); // Convert current time to seconds
        const secondsDiff = currentTimestamp - timestamp; // Calculate difference in seconds

        const timeUnits = [
            { value: 31536000, label: 'year' },
            { value: 2628000, label: 'month' },
            { value: 604800, label: 'week' },
            { value: 86400, label: 'day' },
            { value: 3600, label: 'hour' },
            { value: 60, label: 'minute' }
        ];

        for (const unit of timeUnits) {
            if (secondsDiff >= unit.value) {
                const timeAgo = Math.floor(secondsDiff / unit.value);
                return `${timeAgo} ${unit.label}${timeAgo > 1 ? 's' : ''} ago`;
            }
        }

        return 'Just now';
    };

    const lastUpdated = convertTimestamp(currentApplication.updatedAt)

    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            zIndex: 10,
            height: '12rem',
            width: '87rem',
            border: "1px solid #F0F0F0",
            borderRadius: '8px',
        }}>
            <Typography variant="h6" sx={{ textAlign: "left", padding: "0.5rem", fontWeight: "600", color: "gray" }}>Service Info</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", margin: "0.5rem", gap: 8 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Current Version</Typography>
                    <Box sx={{ display: "flex" }}>
                        <CheckCircleOutlineOutlinedIcon />
                        <Typography>{currentApplication.version}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>Desired Version</Typography>
                    <Typography sx={{ textAlign: "left" }}>{currentApplication.desiredVersion}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                <Button
                    sx={{
                        padding: '8px',
                        backgroundColor: '#8c1aff',
                        color: 'white',
                        textTransform: 'none',
                        display: "block",
                        marginLeft: "0.5rem",
                        marginTop: "2rem",
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#8c1aff', // Keep the background color the same
                            color: 'white', // Keep the text color the same
                        }
                    }}
                >
                    Deploy
                </Button>
                <Typography sx={{ marginRight: '20px', marginTop: '40px' }}>last Updated:{lastUpdated}</Typography>
            </Box>
        </Box>
    );
}

export default ServiceInfo;

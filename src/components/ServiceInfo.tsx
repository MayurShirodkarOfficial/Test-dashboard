import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ServiceInfo = () => {
    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            zIndex:10,
            height: '12rem',
            width: '87rem',
            border: "1px solid #F0F0F0",
            borderRadius: '8px', // Adjust the radius as needed
        }}>
            <Typography variant="h6" sx={{ textAlign: "left", padding: "0.5rem", fontWeight: "600", color: "gray" }}>Service Info</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", margin: "0.5rem", gap: 8 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Current Version</Typography>
                    <Box sx={{ display: "flex" }}>
                        <CheckCircleOutlineOutlinedIcon />
                        <Typography>In Sync</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>Desired Version</Typography>
                    <Typography sx={{ textAlign: "left" }}>1.2.1</Typography>
                </Box>
            </Box>
            <Button sx={{ padding:'8px',backgroundColor: ' #8c1aff', color: 'white', textTransform: 'none',display:"block", marginLeft:"0.5rem" ,marginTop:"2rem",fontWeight:600}}>Deploy</Button>
        </Box>
    );
}

export default ServiceInfo;

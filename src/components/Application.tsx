import { Typography, Box } from '@mui/material';
import EventHistoryIcon from '@mui/icons-material/History';
import ServiceInfo from './ServiceInfo';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SystemMetrics from './SystemMetrics';
import EventHistory from './EventHistory';
const Application = () => {
    return (
        <Box>
            <Typography variant='h6' sx={{ marginRight: '1rem', textAlign: 'left' }}>
                tic-tac-toe
            </Typography>
            <Box sx={{ display: 'flex', marginBottom: "0.5rem" }}>
                <TvOutlinedIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ marginRight: '1rem' }}>
                    Overview
                </Typography>

                <BuildOutlinedIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ marginRight: '1rem' }}>
                    Environment Variable
                </Typography>

                <WarningAmberIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ marginRight: '1rem' }}>
                    Alerts
                </Typography>

                <EventHistoryIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1">
                    Event History
                </Typography>
            </Box>
            <ServiceInfo />
            <Box sx={{display:"flex",gap:2}}>
                <SystemMetrics />
                <EventHistory />
            </Box>

        </Box>
    )
}

export default Application;

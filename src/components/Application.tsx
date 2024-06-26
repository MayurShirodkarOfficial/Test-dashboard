import { Typography, Box } from '@mui/material';
import EventHistoryIcon from '@mui/icons-material/History';
import ServiceInfo from './ServiceInfo';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SystemMetrics from './SystemMetrics';
import EventHistory from './EventHistory';
import { useContext } from 'react';
import { DashBoardContext } from '../context/dashboard';
import StatusButton from './StatusButton';
import EnvironmentVariables from './EnvironmentVariables';

const Application = () => {
    const { currentApplication, setCurrentSelectedSubDashboardMenu, currentSelectedSubDashboardMenu } = useContext(DashBoardContext);
    if (!currentApplication) {
        return <div>Loading...</div>;
    }
    let applicationDashboardDisplayService = <Box>
        <ServiceInfo />
        <Box sx={{ display: "flex", gap: 2 }}>
            <SystemMetrics />
            <EventHistory />
        </Box>
    </Box>;
    if (currentSelectedSubDashboardMenu === 'ENVIRONMENT-VARIABLES') {
        applicationDashboardDisplayService = <EnvironmentVariables/>
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant='h6' sx={{ textAlign: 'left' }}>
                    {currentApplication.name}
                </Typography>
                <Box sx={{ marginTop: '4px', paddingTop: '8px', marginRight: '37px' }}>
                    <StatusButton status={currentApplication.status} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: "0.5rem" }}>
                <TvOutlinedIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ marginRight: '1rem', cursor: 'pointer' }}>
                    Overview
                </Typography>

                <BuildOutlinedIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ marginRight: '1rem', cursor: 'pointer' }}
                    onClick={() => setCurrentSelectedSubDashboardMenu('ENVIRONMENT-VARIABLES')} >
                    Environment Variable
                </Typography>

                <WarningAmberIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ marginRight: '1rem', cursor: 'pointer' }}>
                    Alerts
                </Typography>

                <EventHistoryIcon sx={{ marginRight: '0.5rem' }} />
                <Typography variant="body1" sx={{ cursor: 'pointer' }}>
                    Event History
                </Typography>
            </Box>
            { applicationDashboardDisplayService }
        </Box>
    )
}

export default Application;

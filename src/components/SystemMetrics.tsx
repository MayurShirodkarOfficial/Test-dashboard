import { Box, Typography } from "@mui/material";
import CpuUtilisationGraph from "./graphs/CpuUtilisationGraph";
import { useContext } from "react";
import { DashBoardContext } from "../context/dashboard";
import MemoryUtilisationGraph from "./graphs/MemoryUtilisationGraph";

const SystemMetrics = () => {
    const {systemMetrics,setSystemMetrics} = useContext(DashBoardContext);
    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF', 
                zIndex:10,
                width: "50%",
                border: "1px solid #F0F0F0",
                marginTop: "1rem",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            <Typography variant="h6" sx={{ textAlign: "left", padding: "0.5rem", fontWeight: "600", color: "gray" }}>System Metrics</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography
                    sx={{ fontWeight:800,flexGrow: 1, width: '50%', padding: "0.5rem", borderBottom: '2px solid transparent', transition: 'border-bottom-color 0.3s',textAlign:'center' }}
                    onMouseEnter={(e:any) => e.target.style.borderBottomColor = '#37146B'}
                    onMouseLeave={(e:any) => e.target.style.borderBottomColor = 'transparent'}
                    onClick={(e:any)  => {e.target.style.borderBottomColor = '#37146B';setSystemMetrics('cpu')}}
                >
                    CPU
                </Typography>
                <Typography
                    sx={{ fontWeight:800,flexGrow: 1, width: '50%', padding: "0.5rem", borderBottom: '2px solid transparent', transition: 'border-bottom-color 0.3s',textAlign:'center' }}
                    onMouseEnter={(e:any)  => e.target.style.borderBottomColor = '#37146B'}
                    onMouseLeave={(e:any)  => e.target.style.borderBottomColor = 'transparent'}
                    onClick={(e:any)  => {e.target.style.borderBottomColor = '#37146B';setSystemMetrics('memory');}}
                >
                    Memory
                </Typography>
            </Box>

            <Box sx={{ margin: '2rem' }}>
                {systemMetrics === 'cpu' ? <CpuUtilisationGraph />:<MemoryUtilisationGraph/>}
            </Box>

        </Box>
    );
}

export default SystemMetrics;

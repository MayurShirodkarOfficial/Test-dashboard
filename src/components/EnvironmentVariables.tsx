import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from "react";
import EditEnvironmentVariableDrawer from "./EditEnvironmentVariableDrawer";

const EnvironmentVariables = () => {
    const [localStorageKeys, setLocalStorageKeys] = useState<string[]>(() => {
        const allKeys = Object.keys(localStorage);
        return allKeys.filter(key => key !== "applications" && key !== "currentApplication" && key !== "dashboardContext");
    });

   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onClickDeleteHandler = (key: string) => {
        localStorage.removeItem(key);
        setLocalStorageKeys(prevKeys => prevKeys.filter(k => k !== key));
    }

    const toggleEnvironmentVariableEditDrawerHandler = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }



    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            zIndex: 10,
            height: '20rem',
            width: '87rem',
            border: "1px solid #F0F0F0",
            borderRadius: '8px',
        }}>
            <EditEnvironmentVariableDrawer isOpen={isDrawerOpen} onClose={toggleEnvironmentVariableEditDrawerHandler} />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography sx={{ textAlign: "left", padding: "0.5rem", fontWeight: "600", color: "gray" }}>Environment Variables</Typography>
                <Box sx={{ margin: '0.5rem' }}>
                    <AddIcon sx={{cursor:'pointer', margin: '0.5rem' }} onClick={toggleEnvironmentVariableEditDrawerHandler} />
                    <FileDownloadOutlinedIcon sx={{ margin: '0.5rem' }} />
                </Box>
            </Box>

            {localStorageKeys.map(key => (<Box sx={{ display: 'flex', justifyContent: 'space-between', margin:'0.5rem', height: '3rem', width: '50%', border: '1px solid lightgray', borderRadius: '5px' }}>
                <Box key={key} sx={{ paddingLeft: '0.5rem', display: 'flex', gap: 30, }}>
                    <Typography sx={{ margin: 'auto' }}>{key}</Typography>
                    <Typography sx={{ margin: 'auto' }}>{localStorage.getItem(key)}</Typography>
                </Box>
                <DeleteOutlineOutlinedIcon sx={{ cursor: 'pointer', margin: '0.6rem' }}onClick={() =>onClickDeleteHandler(key)}/>
            </Box>))}

        </Box>
    );
}

export default EnvironmentVariables;

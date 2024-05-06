import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ListItemWrapper = ({ inputName, inputIcon, open }:any) => {
    const IconComponent = inputIcon;

    return (
        <div>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: 'white'
                        }}
                    >
                        <IconComponent /> 
                    </ListItemIcon>
                    <ListItemText primary={inputName} sx={{ opacity: open ? 1 : 0, color: 'white' }} />
                </ListItemButton>
            </ListItem>
        </div>
    );
};

export default ListItemWrapper;

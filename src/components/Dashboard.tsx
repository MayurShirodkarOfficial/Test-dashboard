import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiPaper from '@mui/material/Paper';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ListItemWrapper from './ListItemWrapper';
import DashboardHeader from './DashboardHeader';
import Application from './Application';
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const CustomPaper = styled(MuiPaper)({
    backgroundColor: '#37146B', // Add background color here
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        display: 'block',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function Dashboard() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{}}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Drawer variant="permanent" open={open}>
                    <CustomPaper>
                        <DrawerHeader>
                            <IconButton sx={{marginLeft:'3px'}}>
                                <img src='https://assets-global.website-files.com/63304b2ff06e34d93fb8f9da/65e6cc504b1b88e8b4f7c2e4_Kapstan.svg' />
                            </IconButton>
                        </DrawerHeader>
                        <Divider color='#6324c0'></Divider>
                        <List>
                            <ListItemWrapper inputName="Applications" inputIcon={AppsOutlinedIcon} open={open} />
                            <Divider color='#6324c0'></Divider>
                            <ListItemWrapper inputName="Connections" inputIcon={LinkOutlinedIcon} open={open} />
                            <ListItemWrapper inputName="Cost" inputIcon={AttachMoneyOutlinedIcon} open={open} />
                            <ListItemWrapper inputName="Security" inputIcon={ShieldOutlinedIcon} open={open} />
                            <Box sx={{ flexGrow: 1 }} /> {/* This will push the items to the bottom */}
                            <Divider color='#6324c0'></Divider>

                        </List>
                        <div style={{ paddingBottom: '25rem' }}></div> {/* Add space between lists */}
                        <List>
                            <ListItemWrapper inputName="Admin" inputIcon={PersonOutlineOutlinedIcon} open={open} />
                            <ListItemWrapper inputName="Docs" inputIcon={TurnedInNotOutlinedIcon} open={open} />
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={toggleDrawer}>
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
                                        <KeyboardDoubleArrowLeftIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </CustomPaper>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1 ,marginLeft:'1rem' ,marginTop:'4rem'}}>
                    <DashboardHeader />
                    <Application />
                </Box>
            </Box>
            </Box>
    );
}


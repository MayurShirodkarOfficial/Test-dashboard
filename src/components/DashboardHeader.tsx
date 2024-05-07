
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DashboardHeader = () => {
  return (
    <AppBar sx={{ backgroundColor: '#FFFFFF', zIndex:10}}>
      <Toolbar sx={{ marginLeft: '4rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography component="div" sx={{ color: 'black' }}>
            Application
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', color: 'black',marginLeft:'10px' }}>
            <Typography component="div">
              tic-tac-toe
            </Typography>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center',color: 'black' }}>
          <Avatar sx={{ bgcolor: 'red' }} alt="John Doe">JD</Avatar>
          <Typography component="div" sx={{ color: 'black', marginLeft: '0.5rem' }}>
            John Doe
          </Typography>
          <KeyboardArrowDownIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;

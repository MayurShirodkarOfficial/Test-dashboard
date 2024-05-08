import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DashBoardContext } from '../context/dashboard';

const DashboardHeader = () => {
  const {
    applications,
    currentApplication,
    setCurrentApplication,
  } = useContext(DashBoardContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleItemClick = (app:any) => {
    setCurrentApplication(app);
    setShowDropdown(false); // Close dropdown after selecting an item
  };

  return (
    <AppBar sx={{ backgroundColor: '#FFFFFF', zIndex: 10 }}>
      <Toolbar sx={{ marginLeft: '4rem', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', color: 'black', position: 'relative' }}>
          <Typography component="div" sx={{ color: 'black' }}>
            Application
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <KeyboardArrowDownIcon onClick={() => setShowDropdown(!showDropdown)} />
          </div>
          {showDropdown && (
            <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 100, backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', minWidth: '120px', padding: '8px' }}>
              {/* Dropdown options */}
              {applications.map((app, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(app)}
                  style={{
                    borderRadius: '5px',
                    cursor: 'pointer',
                    padding: '4px 8px',
                    color: currentApplication === app ? '#fff' : 'inherit',
                    backgroundColor: currentApplication === app ? '#37146B' : 'transparent'
                  }}
                  onMouseEnter={(e:any) => {
                    e.target.style.backgroundColor = '#37146B';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e:any) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'inherit';
                  }}
                >
                  {app.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
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

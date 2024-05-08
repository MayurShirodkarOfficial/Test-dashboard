import { green, orange, red } from '@mui/material/colors';

const StatusButton = ({ status }: any) => {
  let buttonStyle = {};
  let buttonText = '';
  let dotColor = ''; // Variable to store the dot color

  switch (status) {
    case 'deployed':
      buttonStyle = {
        backgroundColor: green['A100'],
        color: green[700],
        border: `2px solid ${green[100]}`, // or green[300] for a slightly darker shade
        position: 'relative',
        margin:'auto'
      };
      buttonText = 'Deployed';
      dotColor = green[700]; // Set dot color to match button border
      break;
    case 'successful':
      buttonStyle = {
        backgroundColor: green['A100'],
        color: green[700],
        border: `2px solid ${green[700]}`,
        position: 'relative',
        margin:'auto'
      };
      buttonText = 'Successful';
      dotColor = green[700]; // Set dot color to match button border
      break;
    case 'in_progress':
      buttonStyle = {
        backgroundColor: orange['A100'],
        color: orange[800],
        border: `1px solid ${orange[800]}`,
        position: 'relative',
        margin:'auto'
      };
      buttonText = 'In Progress';
      dotColor = orange[800];
      break;
    case 'failed':
      buttonStyle = {
        backgroundColor: red['A100'],
        color: red[800],
        border: `1px solid ${red[800]}`,
        position: 'relative',
        margin:'auto'
      };
      buttonText = 'Failed';
      dotColor = red[800]; 
      break;
    default:
      buttonStyle = {};
      buttonText = 'Unknown';
  }

  return (
    <button style={buttonStyle}>
      <span style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: dotColor }}></span>
      {buttonText}
    </button>
  );
};

export default StatusButton;

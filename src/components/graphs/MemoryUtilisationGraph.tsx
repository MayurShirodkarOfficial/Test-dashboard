import { useContext, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DashBoardContext } from '../../context/dashboard';

const MemoryUtilisationGraph = () => {
  const {currentApplication} = useContext(DashBoardContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/ybFVVH/memoryutilization');
        const jsonData = await response.json();
        // Filter data based on selected application
        const filteredData = jsonData.filter((item:any) => Number(item.applicationId) === currentApplication.id);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [currentApplication]); // Refetch data when selected application changes

  const options = {
    chart: {
      type: 'line',
      height: 300, // Adjust the height as needed
      width: 500, // Adjust the width as needed
    },
    title: {
      text: 'Memory Utilization',
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        hour: '%I:%M %p' // Format for hours and minutes
      }
    },
    yAxis: {
      title: {
        text: 'Utilization (%)',
      },
    
    },
    series: [
      {
        name: 'Memory Utilization',
        data: data.map((item:any) => [parseInt(item.timestamp) * 1000, parseFloat(item.memoryUtilization)]), // Convert timestamp to milliseconds
        type: 'line',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MemoryUtilisationGraph;

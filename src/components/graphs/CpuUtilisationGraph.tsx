import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const CpuUtilisationGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://retoolapi.dev/Ymxfa2/cpuutilization');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: 'line',
      height: 300, // Adjust the height as needed
      width: 500, // Adjust the width as needed
    },
    title: {
      text: 'CPU Utilization',
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
        name: 'CPU Utilization',
        data: data.map((item:any) => parseFloat(item.cpuUtilization)),
        type: 'line',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CpuUtilisationGraph;
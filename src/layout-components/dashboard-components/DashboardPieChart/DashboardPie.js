import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardPie = () => {
  useEffect(() => {
    const colors = ['#ff5733', '#33ff57'];

    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 350,
        height: 350,
      },
      title: {
        text: '',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors,
          borderRadius: 5,
          dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f}%',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4,
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: 'Vehicles',
        data: [
          { name: 'Serviced', y: 45000 },
          { name: 'Due for service', y: 30000 },
        ],
      }],
    };

    Highcharts.chart('container', options);
  }, []);

  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={{}} />
    </div>
  );
};

export default DashboardPie;

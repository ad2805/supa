import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsHistogramBellcurve from "highcharts/modules/histogram-bellcurve";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsAccessibility from "highcharts/modules/accessibility";

// Initialize Highcharts modules
HighchartsHistogramBellcurve(Highcharts);
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);

const OperationalOdometer = () => {
  useEffect(() => {
    // Create the chart
    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        categories: ["0-10k", "10-25k", "25-50k", "50-80k", "80-120k"],
        title: {
          text: "Kilometer",
        },
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Bikes Count",
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false,
        },
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.x}</b>: ${this.y} Bikes`;
        },
      },
      series: [
        {
          name: "Bikes",
          data: [19956, 45123, 33456, 12492, 9456],
        },
      ],
    });
  }, []);

  return (
    <figure>
      <div id="container" style={{ height: "363px" }}></div>
    </figure>
  );
};

export default OperationalOdometer;

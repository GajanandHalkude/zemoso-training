import React from "react";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";

export interface GraphComponentProps {
  width?: string;
  height?: string;
  options?: ApexOptions;
  type:"line" | "area" | "bar" | "histogram" | "pie" ;
  series?:any;
}

const GraphComponent = (props: GraphComponentProps) => {
  const { options, width, height, type, series } = props;
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height}
      width={width}
    />
  );
};

export default GraphComponent;

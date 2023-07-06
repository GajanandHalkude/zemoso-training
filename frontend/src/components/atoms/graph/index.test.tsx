import React from "react";
import { render } from "@testing-library/react";
import GraphComponent from "./index";
import { GraphComponentProps } from "./index";
import theme from "../../../theme";
import Chart from "react-apexcharts";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const categories = ["Jun 8", "Jun 15", "Jun 22", "Jun 30", "Jul 7", "Jul 13"];
const data = [40, 43, 45, 42, 44, 46];
const data2 = [34, 54, 23, 90, 12, 34];
const testProps: GraphComponentProps = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      id: "graph",
      zoom: {
        autoScaleYaxis: true,
      },
    },
    colors: [
      theme.palette.graphColor.borderColor,
      theme.palette.graphColor.borderColor2 as string,
    ],
    legend: {
      position: "top" as const,
      horizontalAlign: "right" as const,
      fontSize: "14px",
      markers: {
        width: 8,
        height: 8,
      },
      itemMargin: {
        horizontal: 15
      },
    },
    xaxis: {
      labels: {
        show: true,
        rotate: 20,
        style: {
          colors: "#B2B2B9",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: categories,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      colors: [
        theme.palette.graphColor.borderColor,
        theme.palette.graphColor.borderColor2 as string,
      ],
      width: 1,
    },
    fill: {
      colors: [
        theme.palette.graphColor.fillColor,
        theme.palette.graphColor.fillColor2 as string,
      ],
      opacity: 1,
      type: "solid",
    },
    grid: {
      show: true,
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  },
  type: "area",
  series: [
    {
      name: "Bitcoin",
      data: data,
    },
    {
      name: "Total investment",
      data: data2 as number[],
    },
  ],
};

describe("GraphComponent", () => {
  it("renders the Chart component with the provided props", () => {
    render(<GraphComponent {...testProps} />);
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: testProps.options,
        type: testProps.type,
        series: testProps.series,
        height: testProps.height,
        width: testProps.width,
      }),
      {}
    );
  });

  it("renders the Chart component with default width and height if not provided", () => {
    render(
      <GraphComponent
        options={testProps.options}
        type={testProps.type}
        series={testProps.series}
      />
    );
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: testProps.options,
        type: testProps.type,
        series: testProps.series,
        height: undefined,
        width: undefined,
      }),
      {}
    );
  });
});

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GraphComponent from "./index";
import theme from "../../../theme";

export default {
  title: "Atoms/Graph",
  component: GraphComponent,
} as ComponentMeta<typeof GraphComponent>;

const Template: ComponentStory<typeof GraphComponent> = (args) => (
  <GraphComponent {...args} />
);
const  categories =['Jun 8', 'Jun 15', 'Jun 22', 'Jun 30', 'Jul 7', 'Jul 13'];
const data = [40, 43, 45, 42, 44, 46];
const data2= [34, 54, 23, 90, 12, 34];
const ProfitData = [30, 40, 45, 80, 49, 60, 30, 91];
const options = {
  chart: {
    toolbar: {
      show: false,
      sparkline: {
        enabled: true,
      },
      parentHeightOffset: 0,
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
  },
  xaxis: {
    textAnchor: "start",

    labels: {
      show: true,
      rotate: 20,
      style: {
        colors: "#B2B2B9",
        paddingRight: "10",
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
    colors: [theme.palette.graphColor.fillColor, theme.palette.graphColor.fillColor2 as string],
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
};

const series = [
      {
        name: "Bitcoin",
        data: data,
      },
      {
        name: "Total investment",
        data: data2 as number[],
      },
]

const options2 = {
  chart: {
    toolbar: {
      show: false,
    },
    id: "graph",
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  stroke: {
    colors: [theme.palette.profit.borderColor],
    width: 1,
  },
  fill: {
    colors: [theme.palette.profit.fillColor],
    opacity: 1,
    type: "solid",
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
};
const series2 = [
  {
    name: "series-1",
    data: ProfitData
  },
];


export const AreaGraph = Template.bind({});
AreaGraph.args = {
  type: "area",
  options: options,
  series: series,
  height: "246",
  width: "100%",
};

export const MiniGraph = Template.bind({});
MiniGraph.args = {
  type: "area",
  options: options2,
  series: series2,
  height: "200",
  width: "20%",
};

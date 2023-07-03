import { Box, Card, CardContent, Divider, styled, Stack } from "@mui/material";
import React from "react";
import PortfolioValueTypographyComponent from "../../molecules/totalInvestment";
import mangraph from "../../../../public/assets/images/mangraph.svg";
import TimeLineTabs from "../../molecules/Timeline";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";
import GraphComponent from "../../atoms/graph";
import ImageComponent from "../../atoms/Image";

interface PortfolioGraphComponentProps {
  height: string;
  width: string;
  categories: string[];
  borderColor: string;
  fillColor: string;
  borderColor2?: string;
  fillColor2?: string;
  dashboardPage: boolean;
  data: number[];
  data2?: number[];
  investmentValue: number;
  typeOfInvestment: string;
  percentChange: number;
  investmentValue2?: number;
  typeOfInvestment2?: string;
  percentChange2?: number;
  isEmptyState:boolean
}

const FlexRowBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 22px",
}));

const StyledInnerBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "10px",
  paddingRight: "10px",
}));

const PortfolioGraphComponent = ({
  height,
  width,
  categories,
  borderColor,
  data,
  fillColor,
  investmentValue,
  percentChange,
  typeOfInvestment,
  borderColor2,
  fillColor2,
  dashboardPage,
  investmentValue2,
  percentChange2,
  typeOfInvestment2,
  data2,
  isEmptyState,
}: PortfolioGraphComponentProps) => {
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
    colors: [borderColor, borderColor2 as string],
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
      colors: [borderColor, borderColor2 as string],
      width: 1,
    },
    fill: {
      colors: [fillColor, fillColor2 as string],
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

  const series = dashboardPage
    ? [
        {
          name: "Bitcoin",
          data: data,
        },
        {
          name: "Total investment",
          data: data2 as number[],
        },
      ]
    : [
        {
          name: "Bitcoin",
          data: data,
        },
      ];

  const renderDetails = () => {
    return dashboardPage ? (
      <FlexRowBox>
        <Stack direction="row" spacing={3}>
          <PortfolioValueTypographyComponent
            isInDashBoardPage={dashboardPage}
            investmentValue={investmentValue}
            typeOfInvestment={typeOfInvestment}
            percentChange={percentChange}
            width="186px"
          />
          {!isEmptyState && (
            <React.Fragment>
              <StyledInnerBox height={"45px"}>
                <Divider orientation="vertical" color="#E8E8F7" />
              </StyledInnerBox>
              <PortfolioValueTypographyComponent
                isInDashBoardPage={dashboardPage}
                investmentValue={investmentValue2 ? investmentValue2 : 0.0}
                typeOfInvestment={typeOfInvestment2 ? typeOfInvestment2 : ""}
                percentChange={percentChange2 ? percentChange2 : 0.0}
                width="186px"
              />
            </React.Fragment>
          )}
        </Stack>
        <TimeLineTabs typevariant="Dashboard" />
      </FlexRowBox>
    ) : (
      <FlexRowBox>
        <PortfolioValueTypographyComponent
          isInDashBoardPage={dashboardPage}
          investmentValue={investmentValue}
          typeOfInvestment={typeOfInvestment}
          percentChange={percentChange}
          width="186px"
        />
        <TimeLineTabs typevariant="Detail" />
      </FlexRowBox>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          border: "1px solid #ddd",
          borderColor: "#ddd",
          boxShadow: "none",
          height: width,
          width: height,
        }}
      >
        <CardContent
          sx={{
            "&:first-child": {
              marginTop: "8px",
              marginLeft: "-15px",
              marginRight: "-15px",
            },
            "&:last-child": {
              marginBottom: "-20px",
            },
          }}
        >
          {renderDetails()}
          {isEmptyState ? (
            <Box
              width="100%"
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              marginTop={"25px"}
              marginBottom={"5px"}
            >
              <ImageComponent
                data-testid="empty-state-img"
                src={mangraph}
                height={"223px"}
                width={"297px"}
              />
            </Box>
          ) : (
            <Box width="100%">
              <GraphComponent data-testid="portfolioGraph"
                options={options}
                series={series}
                type="area"
                height={height}
                width={width}
              />
            </Box>
          )}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default PortfolioGraphComponent;


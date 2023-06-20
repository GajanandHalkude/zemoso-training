import React from "react";
import { Grid, styled } from "@mui/material";
import GraphComponent from "../../atoms/graph";
import ChipItem from "../../atoms/chip";
import IconComponent from "../../atoms/icon";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme";
import IconWithTypography from "../../molecules/IconWithTypography";
import GreenIncresingTrend from "../../../../public/assets/icons/greenIncreasingTrend.svg";
import DecreasingTrend from "../../../../public/assets/icons/redDecreasingTrend.svg";
import { ProfitData,LossData } from "../../../constants";

export type WatchlistCardProps = {
  image: string;
  name: string;
  price: number | string;
  change: number;
  handleClick?: () => void;
  profit: boolean;
};

const StyledGrid = styled(Grid)({
  height: "130px",
  width: "100%",
  cursor: "pointer",
});

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
});

const StyledGridItem = styled(Grid)({
  padding: "24px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0px",
});

const StyleGraph = styled(Grid)({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
});

const WatchlistCard: React.FC<WatchlistCardProps> = ({ image, name, price, handleClick, profit, change=0 }) => {
 
  const formattedchange =change >= 0 ? `+${change}` : `${change}`;
 
  const options = {
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
      colors: [
        profit
          ? theme.palette.profit.borderColor
          : theme.palette.loss.borderColor,
      ],
      width: 1,
    },
    fill: {
      colors: [
        profit ? theme.palette.profit.fillColor : theme.palette.loss.fillColor,
      ],
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
  const series = [
    {
      name: "series-1",
      data: profit ? ProfitData : LossData,
    },
  ];
  return (
    <StyledGrid container onClick={handleClick} data-testid="watchlist-card" >
      <StyledGridItem item container xs={4}  display="flex" flexDirection="row" alignItems="center">
        <Grid item>
          <Grid
            container
            direction={"row"}
            display="flex"
            alignItems={"flex-start"}
            gap={2}
          >
            <Grid item>
              <IconComponent src={image} width="52px" height="52px" />
            </Grid>
            <StyledContainer>
              <Grid item>
                <Grid container direction={"column"} gap={0.5}>
                  <Grid item>
                    <MuiTypography
                      variant="body1"
                      text={name}
                      color={theme.palette.textColor.highEmphasis}
                    />
                  </Grid>
                  <Grid item>
                    <MuiTypography
                      variant="body1"
                      text={`$${price}`}
                      color={theme.palette.textColor.highEmphasis}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <ChipItem label="24 h" chipType="rounded" chipVariant="light" />
              </Grid>
            </StyledContainer>
          </Grid>
        </Grid>

        <Grid item display="flex" flexDirection="column" alignItems="flex-start">
          <StyleGraph>
            <Grid item>
              <IconWithTypography
                image={profit ? GreenIncresingTrend : DecreasingTrend}
                imageHeight={"9px"}
                imageWidth={"9px"}
                text={"+2.2%"}
                textVariant="overline"
                textColor={
                  profit
                    ? theme.palette.profit.borderColor
                    : theme.palette.loss.borderColor
                }
                iconandtextgap="7px"
                sx={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid item>
              <GraphComponent
                type="area"
                options={options}
                series={series}
                height="80"
                width="100%"
                data-testid="graph-component"
              />
            </Grid>
          </StyleGraph>
        </Grid>
      </StyledGridItem>
    </StyledGrid>
  );
};

export default WatchlistCard;

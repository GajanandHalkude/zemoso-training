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
  change: number ;
  handleClick?: () => void;
  profit: boolean;
  width:string;
};

const StyledGrid = styled(Grid)({
  cursor: "pointer",
  minWidth:"418px",
  height:"115px",
  borderRadius:'4px',
  border:`1px solid ${theme.palette.greyColors.grey100}`
});

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const StyledGridItem = styled(Grid)({
  padding: "8px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyleGraph = styled(Grid)({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column"
});

const WatchlistCard: React.FC<WatchlistCardProps> = ({ image, name, price, handleClick, profit, change, width }) => {

  const isPositiveChange = Number(change) > 0;
  
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
      <StyledGridItem item container  display="flex" flexDirection="row" alignItems="center" >
        <Grid item>
          <Grid
            container
            direction={"row"}
            display="flex"
            alignItems={"flex-start"}
            gap={2}
            marginBottom={"20px"}
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
              <Grid paddingTop={'12px'}>
                <ChipItem label="24 h" chipType="rounded" chipVariant="light" />
              </Grid>
            </StyledContainer>
          </Grid>
        </Grid>

        <Grid item display="flex" flexDirection="column" >
          <StyleGraph>
            <Grid item>
              <IconWithTypography
                image={profit ? GreenIncresingTrend : DecreasingTrend}
                imageHeight={"9px"}
                imageWidth={"9px"}
                text={isPositiveChange ? `+${change}.%` : `${change}.%`}
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
                width={width}
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

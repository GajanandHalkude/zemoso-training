import React from "react"
import { Grid, Box, styled } from "@mui/material";
import ChipItem from "../../atoms/chip";
import IconComponent from "../../atoms/icon";
import LeftIcon from "../../../../public/assets/icons/chevronLeft.svg";
import RightIcon from "../../../../public/assets/icons/chevronRight.svg";
import { cryptoCoins } from "../../../constants";

const StyledBox = styled(Box)({
  width: "inherit",
});


const StyledChipBox = styled(Box)({
  marginTop: "27px",
  marginBottom: "38px",
  marginLeft: "12px",
  width: "100%",
});


const StyledIconBox = styled(Box)({
  marginTop: "12px !important",
});

const CurrencySelection = () => {
  const renderChips = () => {
    return cryptoCoins.map((data, index) => {
      return (
        <Grid item key={index}>
          <ChipItem
            label={data.name}
            chipType="squared"
            chipColor={data.color}
            selected={index === 0 ? true : false}
          />
        </Grid>
      );
    });
  };

  return (
    <StyledBox data-testid="chip-slider">
      <Grid container>
      </Grid>
      <StyledChipBox>
        <Grid container spacing={{ xs: 1, md: 2, lg: 2, xl: 5 }} direction="row">
          <Grid item>
            <StyledIconBox>
              <IconComponent data-testid="left-icon" src={LeftIcon} height="12.73px" width="7.8px" />
            </StyledIconBox>
          </Grid>
          {renderChips()}
          <Grid item>
            <StyledIconBox>
              <IconComponent data-testid="right-icon" src={RightIcon} height="12.73px" width="7.8px" />
            </StyledIconBox>
          </Grid>
        </Grid>
      </StyledChipBox>
    </StyledBox>
    
  );
};

export default CurrencySelection;
/* eslint-disable react/jsx-key */
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
  FormControl,
  Grid,
  Icon,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { KeyboardArrowDown } from "@mui/icons-material";
import theme from "../../../theme/index";
import { DELIVERY_TYPES } from "../../../constants";

export interface DeliveryProps {
  instantTime: string;
  fee: string;
  title: string;
}

const StyledGrid = styled(Grid)({
  borderRadius: "4px",
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  padding: "1.3rem",
  backgroundColor: theme.palette.structural.main,
  width: "100%",
});
const StyledIcon = styled(Icon)({
  paddingRight: "0.9rem",
  paddingLeft: "0.9rem",
});

const StyledMenuItem = styled(MenuItem)({
  height: 54,
  display: "none",
});

const DeliveryDropdown = (props: DeliveryProps) => {
  const { instantTime, fee, title } = props;
  const [delivery, setDelivery] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDelivery(event.target.value);
  };
  return (
    <div>
      <StyledGrid
        display="flex"
        justifyContent={"space-between"}
        direction="column"
        width="100%"
        gap={1}
      >
        <Grid item>
          <Typography
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            {title}
          </Typography>
        </Grid>

        <FormControl fullWidth>
          <Select
            value={delivery}
            onChange={handleChange}
            displayEmpty
            sx={{
              height: 40,
              padding: "32px 0px 32px 3px",
              "& .MuiOutlinedInput-notchedOutline": {
                border: `1px solid ${theme.palette.greyColors.grey100} !important`,
                padding: "0px",
              },
            }}
            inputProps={{ "aria-label": "Without label" }}
            IconComponent={KeyboardArrowDown}
            startAdornment={
              <StyledIcon>
                <LocalShippingOutlinedIcon />
              </StyledIcon>
            }
          >
            <StyledMenuItem value="">
              <Typography data-testid="dropdown">
                <Grid container>
                  <Grid item>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        fontWeight={600}
                        fontSize={16}
                        color={theme.palette.textColor.highEmphasis}
                      >
                        Instant : {instantTime} min
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        fontWeight={600}
                        fontSize={14}
                        color={theme.palette.textColor.mediumEmphasis}
                        variant="caption1"
                      >
                        Transaction fees : {fee} BTC
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Typography>
            </StyledMenuItem>

            {DELIVERY_TYPES.map(({ type, time, fees, values }) => (
              <MenuItem
                key={values}
                value={values}
                sx={{
                  height: 54,
                  backgroundColor: "#FAFCFF",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                }}
              >
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Grid item>
                    <Typography
                      fontWeight={500}
                      fontSize={14}
                      color={theme.palette.textColor.highEmphasis}
                    >
                      {type}
                      <b>{time}</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      fontWeight={500}
                      fontSize={12}
                      color={theme.palette.textColor.mediumEmphasis}
                      variant="caption2"
                    >
                      {type !== "None" ? `Delivery fees : ${fees} BTC` : ""}
                    </Typography>
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </StyledGrid>
    </div>
  );
};

export default DeliveryDropdown;

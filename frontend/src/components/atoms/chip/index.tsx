import { Chip, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

interface ChipProps {
  label: string;
  chipVariant?: "light" | "dark";
  chipType: "rounded" | "squared";
  chipColor?: string;
  selected?: boolean;
  sx?:React.CSSProperties
}

const StyledRoundedChip = styled(Chip)((props: ChipProps) => ({
  height: props.chipVariant === "light" ? "18px" : "20px",
  borderRadius: "100px",
  gap: "10px",
  backgroundColor:
    props.chipVariant === "light"
      ? theme.palette.greyColors.grey50
      : theme.palette.greyColors.grey100,

  "& .MuiChip-label": {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16px",
    color:
      props.chipVariant === "light"
        ? theme.palette.textColor.mediumEmphasis
        : theme.palette.greyColors.grey500,
  },
}));

const StyledSquaredChip = styled(Chip)((props: ChipProps) => ({
  height: "38px",
  gap: "10px",
  borderRadius: "4px",
  backgroundColor: props.chipColor,
  padding: "8px 8px",
  border: props.selected ? `2px solid ${props.chipColor}` : "",
  "& .MuiChip-label": {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    color: theme.palette.textColor.highEmphasis,
  },
  "& .MuiChip-clickable": {
    border: `2px solid ${props.chipColor}`,
  },
}));

const ChipItem: React.FC<ChipProps> = ({
  label,
  chipVariant,
  chipType,
  chipColor,
  selected,
}) => {
  return chipType === "squared" ?
    (
      <StyledSquaredChip
        variant="filled"
        label={label}
        chipType={chipType}
        chipColor={chipColor}
        selected={selected}
        data-testid="chip"
      />
    )
    :
    (
      <StyledRoundedChip
        variant="filled"
        label={label}
        chipVariant={chipVariant}
        chipType={chipType}
        data-testid="chip"
      />
    );
};

export default ChipItem;

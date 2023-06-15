import React from "react";
import MuiTypography from "../../atoms/typography";
import { Box, styled } from "@mui/material";
import { currencyBannerContent, currencyBannerData } from "../../../constants";
import IconWithTypography from "../IconWithTypography";
import File from "../../../../public/assets/images/file.svg"
import Globe from "../../../../public/assets/images/globe.svg"
import PortfolioTab from "../portfolioTab";
import theme from "../../../theme";


interface currencyDetailsBannerProps {
    aboutCurrency: string,
    details?: string,
}

const StyledBox = styled(Box)(
    {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 0px 16px 2px',
        gap: '16px',
        //   width: '397px',
        //   height: '312px',
        background: theme.palette.structural.main,
        border: `1px solid ${theme.palette.greyColors.grey100}`,
        borderRadius: '4px',

    }
);

const StyledBox1 = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    gap: '30px',
})

const StyledBox2 = styled(Box)({
    flexWrap: 'wrap',
    color: theme.palette.textColor.highEmphasis,
});

const Styled2 = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})
const Styled3 = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

const CurrencyDetailsBanner = ({ aboutCurrency, details }: currencyDetailsBannerProps) => {
    return (
        <StyledBox1 data-testid='portfolio-tab' flexDirection={"row"}>
            <Styled3>
                <Styled2>
                    <MuiTypography text={aboutCurrency} />
                    <MuiTypography text={currencyBannerContent} />
                </Styled2>
                <Styled2 data-testid='portfolio-tab' >
                    <MuiTypography text={"Resourses"} />
                    <IconWithTypography image={Globe} imageHeight={""} imageWidth={""} text={"Official Website"} textVariant={undefined} textColor={theme.palette.graphColor.borderColor2} />
                    <IconWithTypography image={File} imageHeight={""} imageWidth={""} text={"White Paper"} textVariant={undefined} textColor={theme.palette.graphColor.borderColor2} />
                </Styled2>
            </Styled3>

            <StyledBox>
                <StyledBox2 data-testid='portfolio-tab'>
                    <MuiTypography text={"Price correlation with"} />
                </StyledBox2>
                <Box data-testid='portfolio-tab'>
                    {currencyBannerData.map((data, index) => (
                        <Box key={index}>
                            <PortfolioTab
                                icon={data.icon}
                                cryptoCoinName={data.coinName}
                                shortNameOfCoin={data.shortName}
                                value={data.value}
                                totalPercentage={data.percentage}
                            />
                        </Box>
                    ))}
                </Box>
            </StyledBox>
        </StyledBox1>
    )
}
export default CurrencyDetailsBanner
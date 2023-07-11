import React from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import TypographyComponent from '../../atoms/typography'
import IconComponent from '../../atoms/icon'
import { Grid } from '@mui/material'
import theme from "../../../theme"
import Tick from "../../../../public/assets/icons/selected.svg";
type Props = {
  selected: boolean
  image: string
  name: string
  value: number
  onClick?: () => void
}

const Image = styled('img')({
  width: '16.66px',
  height: '11.43px',
  float: 'right',
  paddingTop: '13.32px',
  paddingRight: '10.83px',
})

const ChooseCrypto: React.FC<Props> = (props) => {
  const { selected, image, name } = props
  const value = Intl.NumberFormat('en-US',{minimumFractionDigits: 2,maximumFractionDigits: 2}).format(props.value)
  const MyComponent = styled(Box)({
    border: selected ? `2px solid #0052FF` : '',
    borderRadius: '4px',
  })
  const GridComponent = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: selected ? '' : '24px',
    paddingBottom: '24px',
  })
  return (
    <MyComponent data-testid={name}>
      <Grid container>
        {selected && (
          <Grid item xs={12}>
            <Image src={Tick} />
          </Grid>
        )}
        <GridComponent item container direction="column">
          <Grid item>
            <IconComponent src={image} width="56px" height="56px" />
          </Grid>
          <Grid item>
            <TypographyComponent
              variant="body1"
              color={theme.palette.greyColors.grey500}
              text={name}
            />
          </Grid>
          <Grid item>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.mediumEmphasis}
              text={`$${value}`}
              sx={{fontSize:"14px"}}
            />
          </Grid>
        </GridComponent>
      </Grid>
    </MyComponent>
  );
}

export default ChooseCrypto

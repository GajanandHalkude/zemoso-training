import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading4: React.CSSProperties
    heading6: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle2: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    button: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    overline: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    heading4: React.CSSProperties
    heading6: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle2: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    button: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    overline: React.CSSProperties
  }

  interface Palette {
    structural: Palette['primary']
    greyColors: Palette['primary']
    profit: GraphColor
    loss: GraphColor
    textColor: Palette['primary']
    timeLine: GraphColor
    chipColors: Palette['primary']
    graphColor: GraphColor
  }
  interface GraphColor {
    fillColor: string
    borderColor: string
    fillColor2?: string
    borderColor2?: string
  }
  interface PaletteOptions {
    structural?: PaletteOptions['primary']
    profit?: GraphColor
    loss?: GraphColor
    greyColors?: PaletteOptions['primary']
    accent?: PaletteOptions['primary']
    textColor?: PaletteOptions['primary']
    fillColors?: PaletteOptions['primary']
    timeLine: GraphColor
    chipColors?: PaletteOptions['primary']
    graphColor: GraphColor
  }

  interface PaletteColor {
    success600?: string
    success500?: string
    warning300?: string
    primary500?: string
    highEmphasis?: string
    mediumEmphasis?: string
    grey50?: string
    grey500?: string
    grey400?: string
    grey200?: string
    grey100?: string
    grey300?: string
    white?: string
    linear1?: string
    linear2?: string
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
    color6?: string
  }

  interface SimplePaletteColorOptions {
    success600?: string
    success500?: string
    warning300?: string
    primary500?: string
    highEmphasis?: string
    mediumEmphasis?: string
    grey50?: string
    grey500?: string
    grey400?: string
    grey200?: string
    grey100?: string
    grey300?: string
    white?: string
    linear1?: string
    linear2?: string
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
    color6?: string
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading4: true
    heading6: true
    subtitle1: true
    subtitle2: true
    body1: true
    body2: true
    caption1: true
    caption2: true
    overline: true
  }
}

const theme = createTheme({
  typography: {
    heading4: {
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '54px',
      textTransform: 'none',
    },
    heading6: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '34px',
      textTransform: 'none',
    },

    subtitle1: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '28px',
      textTransform: 'none',
    },

    subtitle2: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      textTransform: 'none',
    },

    body1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
      textTransform: 'none',
    },

    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      textTransform: 'none',
    },
    button: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '42px',
      textTransform: 'none',
    },
    caption1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
      textTransform: 'none',
    },

    caption2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      textTransform: 'none',
    },
    overline: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '14px',
      textTransform: 'none',
    },
  },

  palette: {
    primary: {
      main: '#0052FF',
      success600: '#20B03F',
      success500: '#20B03F',
      warning300: '#FFA74F',
      primary500: '#0052FF',
    },
    text: {
      primary: '#373C38',
      secondary: '#656E66',
      disabled: '#94A196',
    },
    textColor: {
      main: '#000000',
      highEmphasis: '#343446',
      mediumEmphasis: '#7D7D89',
    },
    greyColors: {
      main: '#D6D6D6',
      grey50: '#F2F2F7',
      grey500: '#4B4B60',
      grey200: '#E9EBE9',
      grey100: '#E8E8F7',
      grey300: '#B4B4CF',
      grey400: '#FAFAFA'
    },
    profit: {
      fillColor: '#E9F7EC',
      borderColor: '#46BF31',
    },
    loss: {
      fillColor: '#F3E6EB',
      borderColor: '#B71A33',
    },
    structural: {
      main: '#FFFFFF',
    },
    timeLine: {
      fillColor: '#00177A',
      borderColor: '#ECECF7',
    },
    chipColors: {
      main: 'rgba(247, 147, 26, 0.2)',
      color1: 'rgba(34, 34, 34, 0.2)',
      color2: 'rgba(230, 0, 122, 0.2)',
      color3: 'rgba(98, 126, 234, 0.2)',
      color4: 'rgba(38, 161, 123, 0.2)',
      color5: 'rgba(25, 25, 113, 0.2)',
      color6: 'rgba(219, 201, 132, 0.2)',
    },
    graphColor: {
      fillColor: '#FFF6ED',
      borderColor: '#FFA74F',
      fillColor2: 'rgba(0, 82, 255, 0.2)',
      borderColor2: '#0052FF',
    },
  },
})

export default theme
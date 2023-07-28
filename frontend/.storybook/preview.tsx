import React from 'react'
import type { Preview } from '@storybook/react'
import theme from '../src/themes/index'
import './storybook.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

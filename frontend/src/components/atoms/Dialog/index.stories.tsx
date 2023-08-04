import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import Dialog from '.'
import { Box } from '@mui/material'
import TypographyComponent from '../Typography'

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Dialog>

export const Example: Story = {
  args: {
    open: true,
    children: (
      <Box>
        <TypographyComponent text="Hello World" variant="h1" />
      </Box>
    )
  }
}

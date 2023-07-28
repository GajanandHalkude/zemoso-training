import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import InputFieldField from '.'

const meta: Meta<typeof InputFieldField> = {
  title: 'Atoms/IconTextField',
  component: InputFieldField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined']
    },
    disabled: {
      control: 'boolean'
    }
  }
}
type Story = StoryObj<typeof InputFieldField>

export const WithOutIcon: Story = {
  args: {
    variant: 'outlined',
    label: 'without'
  }
}

export const OneIconTextFiled: Story = {
  args: {
    startIcon: <LockIcon />,
    variant: 'outlined',
    label: 'one'
  }
}
export const DoubleIconTextFiled: Story = {
  args: {
    startIcon: <LockIcon />,
    endIcon: <VisibilityIcon />,
    label: 'double'
  }
}

export default meta

import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import theme from '../../../themes'

const meta: Meta<typeof Button> = {
  title: 'ATOMS/Button',
  component: Button,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Button>

export const singUp: Story = {
  args: {
    label: 'Sign up',
    disabled: false,
    sx: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      boxShadow: '0px 8px 24px 0px',
      width: '516px',
      padding: '16px 43 px'
    }
  }
}

export const logIn: Story = {
  args: {
    label: 'Log in',
    disabled: false,
    sx: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      boxShadow: '0px 8px 24px 0px',
      width: '516px',
      padding: '16px 43 px'
    }
  }
}

export const Continue: Story = {
  args: {
    label: 'Continue',
    disabled: false,
    sx: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      boxShadow: '0px 8px 24px 0px',
      padding: '16px 30px'
    }
  }
}

export const Submit: Story = {
  args: {
    label: 'Submit',
    disabled: false,
    sx: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      boxShadow: '0px 8px 24px 0px',
      width: '135px',
      padding: '16px 30px'
    }
  }
}

export const Cancel: Story = {
  args: {
    label: 'Cancel the transfer',
    variant: 'contained',
    sx: {
      width: '218px',
      padding: '16px 30px',
      backgroundColor: theme.palette.structuralColors.white,
      color: theme.palette.primary.dark
    }
  }
}

export const addAnotherDirector: Story = {
  args: {
    label: 'Add another director',
    variant: 'text',
    sx: {
      width: '218px',
      padding: '16px 30px',
      color: theme.palette.primary.dark
    }
  }
}

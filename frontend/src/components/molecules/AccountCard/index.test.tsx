import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import '@testing-library/jest-dom'
import AccountCard from '.'
import theme from '../../../themes'

jest.mock('../../../themes', () => ({
  palette: {
    primary: {
      dark: 'dark'
    },
    text: {
      highEmphasis: 'highEmphasis',
      lowEmphasis: 'lowEmphasis'
    }
  }
}))

describe('AccountCard', () => {
  const icon = (
    <PermIdentityIcon
      data-testid="account-card-icon"
      sx={{ color: theme.palette.primary.dark }}
      fontSize="medium"
    />
  )
  const title = 'Personal account'
  const description = 'Send, spend, and receive around the world for less.'
  it('should render the component', () => {
    const { getByTestId } = render(
      <AccountCard
        data-testid="account-card"
        icon={icon}
        title={title}
        description={description}
        onClick={jest.fn()}
      />
    )
    expect(getByTestId('account-card')).toBeInTheDocument()
  })
  it('Check icon is render properly or not', () => {
    const { getByTestId } = render(
      <AccountCard
        data-testid="account-card"
        icon={icon}
        title={title}
        description={description}
        onClick={jest.fn()}
      />
    )
    expect(getByTestId('account-card-icon')).toBeInTheDocument()
  })
  it('Check all text proper present or not', () => {
    const { getByText } = render(
      <AccountCard
        data-testid="account-card"
        icon={icon}
        title={title}
        description={description}
        onClick={jest.fn()}
      />
    )
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(description)).toBeInTheDocument()
  })
  it('test on click handler', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <AccountCard
        data-testid="account-card"
        icon={icon}
        title={title}
        description={description}
        onClick={onClick}
      />
    )
    const element = getByTestId('account-card')
    fireEvent.click(element)
    expect(onClick).toHaveBeenCalled()
  })
})

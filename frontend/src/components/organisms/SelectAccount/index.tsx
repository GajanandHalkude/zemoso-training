import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Icons from '../../atoms/Icons'
import BackIcon from '../../../../public/assests/icons/arrow.svg'
import TypographyComponent from '../../atoms/Typography'
import AccountCard from '../../molecules/AccountCard'
import theme from '../../../themes'
import { AccountCards } from './constant'
import {
  SELECT_ACCOUNT_TYPE_HEADING1,
  SELECT_ACCOUNT_TYPE_HEADING2
} from '../../../utils/constants/string'

interface SelectAccountCardProps {
  onClick: (data: string) => void
}

const SelectAccountCard = ({
  onClick
}: SelectAccountCardProps): React.JSX.Element => {
  const isMdScreen = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Stack height="100%" width="100%" padding={2}>
      <Stack gap={3}>
        <Stack>
          <Icons src={BackIcon} alt="Back Icon" />
        </Stack>
        <Stack gap={4} alignItems="center">
          <Stack>
            <TypographyComponent
              maxWidth="512px"
              text={SELECT_ACCOUNT_TYPE_HEADING1}
              variant="h1"
            />
            <TypographyComponent
              text={SELECT_ACCOUNT_TYPE_HEADING2}
              variant="body3"
            />
          </Stack>
          <Stack gap={2}>
            {AccountCards.map(({ title, description, icon, data }, index) => (
              <AccountCard
                onClick={() => {
                  onClick(data)
                }}
                key={data}
                sx={{
                  minWidth: isMdScreen ? '512px' : '100%'
                }}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SelectAccountCard

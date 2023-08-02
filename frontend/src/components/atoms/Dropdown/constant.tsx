import { Stack } from '@mui/material'
import React from 'react'
import Icons from '../Icons'
import Andorra from '../../../../public/Assets/flags/Andorra.svg'
import uk from '../../../../public/Assets/flags/uk.svg'
import Austria from '../../../../public/Assets/flags/Austria.svg'
import india from '../../../../public/Assets/flags/india.svg'
import TypographyComponent from '../Typography'

export const countries = [
  {
    component: (
      <Stack direction="row" alignItems="center" gap={2}>
        <Icons src={Andorra} alt="Andorra" />
      </Stack>
    ),
    value: 'Andorra'
  },
  {
    component: (
      <Stack direction="row" alignItems="center" gap={2}>
        <Icons src={uk} alt="uk" />
      </Stack>
    ),
    value: 'United Kingdom'
  },
  {
    component: (
      <Stack direction="row" alignItems="center" gap={2}>
        <Icons src={Austria} alt="Austria" />
      </Stack>
    ),
    value: 'Austria'
  },
  {
    component: (
      <Stack direction="row" alignItems="center" gap={2}>
        <Icons src={india} alt="India" />
      </Stack>
    ),
    value: 'India'
  }
]

export const category = [
  {
    component: (
      <Stack>
        <TypographyComponent
          text="Design,marketing or communication"
          variant="body2"
        />
      </Stack>
    ),
    value: 'Design,marketing or communication'
  },
  {
    component: (
      <Stack>
        <TypographyComponent
          text="Health, sports or personal care"
          variant="body2"
        />
      </Stack>
    ),
    value: 'Health, sports or personal care'
  }
]

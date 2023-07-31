/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Box,
  Step,
  StepLabel,
  Stepper as MuiStepper,
  styled,
  StepConnector,
  type StepIconProps,
  stepConnectorClasses,
  stepLabelClasses
} from '@mui/material'
import React from 'react'
import theme from '../../../themes'
import TypographyComponent from '../Typography'
interface StepperProps {
  steps: string[]
  activeStep?: number
}

const StyledStepLevel = styled(StepLabel)(() => ({
  marginLeft: '30px',
  color: theme.palette.text.mediumEmphasis,
  [`.${stepLabelClasses.label}.${stepLabelClasses.active}`]: {
    color: '#7633FF'
  },
  [`.${stepLabelClasses.label}.${stepLabelClasses.completed}`]: {
    color: theme.palette.primary.dark
  }
}))

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  width: '100%',
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 15px)',
    right: 'calc(50% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.structuralColors.background,
    borderTopWidth: 3,
    borderRadius: 1
  }
}))

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.text.mediumEmphasis,
    display: 'flex',
    height: 22,
    alignItems: 'center',
    marginLeft: '10px',
    justifyContent: 'center',
    ...(ownerState.active && {
      color: theme.palette.text.mediumEmphasis
    }),
    '& .QontoStepIcon-completedIcon': {
      color: theme.palette.primary.main,
      zIndex: 1,
      fontSize: 18
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    }
  })
)

const QontoStepIcon = (props: StepIconProps) => {
  const { active, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {active ? (
        <div className="QontoStepIcon-circle QontoStepIcon-completedIcon" />
      ) : null}
    </QontoStepIconRoot>
  )
}

const HorizontalStepper = ({
  steps,
  activeStep = 1,
  ...props
}: StepperProps): React.JSX.Element => {
  return (
    <Box sx={{ width: '100%' }} {...props}>
      <MuiStepper
        activeStep={activeStep - 1}
        alternativeLabel
        connector={
          <QontoConnector data-testid="horizontal-stepper-connector" />
        }
      >
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StyledStepLevel
                data-testid="horizontal-stepper-lavel"
                StepIconComponent={QontoStepIcon}
              >
                <TypographyComponent variant="caption" text={label} />
              </StyledStepLevel>
            </Step>
          )
        })}
      </MuiStepper>
    </Box>
  )
}

export default HorizontalStepper

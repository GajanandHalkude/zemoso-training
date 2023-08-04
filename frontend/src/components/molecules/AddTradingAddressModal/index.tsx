import { Box, TextField, useMediaQuery } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import React, { useMemo } from 'react'
import TypographyComponent from '../../atoms/Typography'
import {
  ADD_NEW_ADDRESS_MODAL_BUTTON_TITLE,
  ADD_NEW_ADDRESS_MODAL_HEADING
} from '../../../utils/constants/string'
import theme from '../../../themes'
import { Stack } from '@mui/system'
import Button from '../../atoms/Button'
interface AddTradingAddressModalProps {
  open: boolean
  addTradingAddress: (value: string) => void
  handleClose: () => void
  tradingAddressName: string
}

const AddTradingAddressModal = ({
  open,
  addTradingAddress,
  tradingAddressName,
  handleClose
}: AddTradingAddressModalProps): React.JSX.Element => {
  const [value, setValue] = React.useState('')
  const isMdScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const isDisabled = useMemo(() => value === '', [value])
  const onChnageHndler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }
  const handleOnClose = (): void => {
    handleClose()
    addTradingAddress(value)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: theme.spacing(4),
          backgroundColor: theme.palette.structuralColors.white
        }
      }}
    >
      <Box
        width={isMdScreen ? theme.spacing(141) : '80vw'}
        padding={theme.spacing(6)}
      >
        <Stack gap={4}>
          <Stack gap={2}>
            <TypographyComponent
              text={ADD_NEW_ADDRESS_MODAL_HEADING}
              variant="body1"
            />
            <TextField
              type="text"
              label={tradingAddressName}
              data-testid="add-trading-address-modal-textfield"
              rows={2}
              value={value}
              multiline
              onChange={onChnageHndler}
              sx={{ width: '98%' }}
            />
          </Stack>
          <Stack alignItems="center">
            <Button
              data-testid="add-trading-address-modal-button"
              size="large"
              variant="contained"
              label={ADD_NEW_ADDRESS_MODAL_BUTTON_TITLE}
              disabled={isDisabled}
              onClick={handleOnClose}
              sx={{
                width: theme.spacing(25),
                background: theme.palette.primary.dark
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Dialog>
  )
}
export default AddTradingAddressModal

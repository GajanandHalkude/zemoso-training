import React from 'react'
import {
  Dialog as MuiDialog,
  type DialogProps as MuiDialogProps
} from '@mui/material'

interface DialogProps extends MuiDialogProps {
  open: boolean
  onClose?: () => void
  children: any
}

const Dialog = ({
  open,
  children,
  ...props
}: DialogProps): React.JSX.Element => {
  return (
    <MuiDialog
      open={open}
      {...props}
      PaperProps={{
        sx: {
          padding: '1rem'
        }
      }}
    >
      {children}
    </MuiDialog>
  )
}
export default Dialog

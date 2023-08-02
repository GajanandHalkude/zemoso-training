import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, {
  type SelectChangeEvent,
  type SelectProps
} from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

import theme from '../../../themes'
import { Box } from '@mui/material'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'

interface Content {
  component: any
  value: string
}
interface DropdownProp extends SelectProps {
  values: Content[]
  placeholder: string
  onChangeHandler: (value: string) => void
  IconComponent?: React.ElementType
  selectedValue?: string
  height?: string
  width?: string
}

const Dropdown = ({
  values,
  IconComponent,
  onChangeHandler,
  placeholder,
  selectedValue = '',
  height,
  width,
  ...props
}: DropdownProp): React.JSX.Element => {
  const handleOnChnage = (e: SelectChangeEvent<unknown>): void => {
    onChangeHandler(e.target.value as string)
  }
  return (
    <Box sx={{ width: { width }, height: { height } }} data-testid="dropdown">
      <Select
        onChange={handleOnChnage}
        IconComponent={IconComponent}
        label={placeholder}
        value={selectedValue === '' ? 'default' : selectedValue}
        variant="outlined"
        {...props}
        sx={{
          '&.MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.text.lowEmphasis
            }
          },
          width: { width }
        }}
        input={<OutlinedInput />}
      >
        <MenuItem disabled value={'default'}>
          {placeholder}
        </MenuItem>
        {values.map(({ value, component }: Content) => (
          <MenuItem key={value} value={value}>
            {component}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

Dropdown.defaultProps = {
  width: '516px',
  IconComponent: KeyboardArrowDownSharpIcon
}

export default Dropdown

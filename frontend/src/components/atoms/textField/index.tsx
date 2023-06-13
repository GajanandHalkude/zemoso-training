import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface TextFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  password: boolean;
  width?: string;
  height?: string | number;
  size?: 'small' | 'medium'
}

const CustomTextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange,
  password,
  width,
  height,
 size
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const textFieldStyle = {
    width: width || "100%", // Use provided width or default to 100% width
    height: height || 40 , // Use provided height or default to 40px height
  };

  return (
    <TextField
      placeholder={placeholder}
      type={password && !showPassword ? "password" : "text"}
      value={value}
      onChange={handleChange}
      fullWidth
      margin="normal"
      size={size}
      sx={textFieldStyle}
      InputProps={
        password
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default CustomTextField;
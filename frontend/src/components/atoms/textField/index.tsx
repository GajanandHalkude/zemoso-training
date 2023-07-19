import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import EyeOn from "../../../../public/assets/icons/eye.svg";
import EyeOff from "../../../../public/assets/icons/Vector.svg";
import IconComponent from '../icon';

interface TextFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isPassword: boolean;
  width?: string;
  height?: string | number;
  size?: "small" | "medium";
  borderRadius?: string | number;
}

const CustomTextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange,
  isPassword,
  width,
  height,
  size,
  borderRadius,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const textFieldStyle = {
    width: width ?? "100%",
    height: height ?? 40,
    borderRadius: borderRadius ?? "8px",    
  };

  return (
    <TextField
      placeholder={placeholder}
      type={isPassword && !showPassword ? "password" : "text"}
      value={value}
      onChange={handleChange}
      fullWidth
      margin="normal"
      size={size}
      InputProps={{
        sx: textFieldStyle,
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? (
                <IconComponent height={"19.41px"} width={"20px"} src={EyeOff}  />
              ) : (
                <IconComponent height={"19.41px"} width={"20px"} src={EyeOn} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextField;
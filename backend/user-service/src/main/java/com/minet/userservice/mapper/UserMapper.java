package com.minet.userservice.mapper;

import com.minet.userservice.dto.UserDto;
import com.minet.userservice.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserMapper {
    @Autowired
    ModelMapper modelMapper;
    public UserDto convertToUserDTO(User user) {
        try {
            log.info(" >>> INSIDE UserMapper: convertToDto() Converting entity to dto");
            log.info(String.valueOf(user));
            return modelMapper.map(user, UserDto.class);
        } catch (NullPointerException exception) {
            log.error(" >>> INSIDE UserMapper: convertToDto() Converting entity to dto");
            throw new NullPointerException("NullPointerException in converting to dto");
        }
    }

    public User convertToUser(UserDto userDto) {
        try {
            log.info(" >>> INSIDE UserMapper: convertToEntity() Converting dto to entity");
            return modelMapper.map(userDto, User.class);
        } catch (NullPointerException exception) {
            log.error(" >>> INSIDE UserMapper: convertToEntity() Converting dto to entity");
            throw new NullPointerException("NullPointerException in converting to entity");
        }
    }
}

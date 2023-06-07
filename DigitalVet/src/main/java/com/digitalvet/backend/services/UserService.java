package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.UserEntity;
import com.digitalvet.backend.model.UserDto;

import java.util.Optional;

public interface UserService {
    Long addUser(UserDto userDto);

    Optional<UserEntity> loginUser(UserDto userDto);
}

package com.digitalvet.backend.services;

import com.digitalvet.backend.model.UserDto;

public interface UserService {
    Long addUser(UserDto userDto);

    String loginUser(UserDto userDto);
}

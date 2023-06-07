package com.digitalvet.backend.controller;

import com.digitalvet.backend.entity.UserEntity;
import com.digitalvet.backend.model.UserDto;
import com.digitalvet.backend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/register")
    public Long register(@RequestBody UserDto userDto) {
        return userService.addUser(userDto);
    }

    @PostMapping(path = "/login")
    public Optional<UserEntity> login(@RequestBody UserDto userDto){
        return userService.loginUser(userDto);
    }

}
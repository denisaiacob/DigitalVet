package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.UserDto;
import com.digitalvet.backend.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String>login(@RequestBody UserDto userDto){
        String loginMessage= userService.loginUser(userDto);
        return ResponseEntity.ok(loginMessage);
    }
}


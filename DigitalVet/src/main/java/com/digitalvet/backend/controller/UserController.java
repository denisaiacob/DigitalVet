package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.UserModel;
import com.digitalvet.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/user")
    public Long register(@RequestBody UserModel userModel) {
        return userService.addUser(userModel);//id
    }
}


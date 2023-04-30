package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.UserModel;
import com.digitalvet.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public Long register(@RequestBody UserModel userModel) {
        return userService.addUser(userModel);//id
    }
}


package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.UserEntity;
import com.digitalvet.backend.model.UserModel;
import com.digitalvet.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public Long addUser(UserModel userModel) {

        UserEntity user=new UserEntity(
                userModel.getId(),
                userModel.getFirstName(),
                userModel.getLastName(),
                userModel.getEmail(),
                userModel.getPassword(),
                userModel.getRole());

        userRepository.save(user);

        return user.getId();
    }
}

package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.UserEntity;
import com.digitalvet.backend.model.UserDto;
import com.digitalvet.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Long addUser(UserDto userDto) {

        UserEntity user=new UserEntity(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword()),
                userDto.getRole());

        userRepository.save(user);
        return user.getId();
    }

    @Override
    public String loginUser(UserDto userDto) {
        UserEntity userEntity = userRepository.findByEmail(userDto.getEmail());
        if (userEntity != null) {
            String password = userDto.getPassword();
            String encodedPassword = userEntity.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (Boolean.TRUE.equals(isPwdRight)) {
                Optional<UserEntity> employee = userRepository.findOneByEmailAndPassword(userDto.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return "Success";
                } else {
                    return "Failed";
                }
            } else {

                return "Password not match";
            }
        }else {
            return "Email not exits";
        }

    }
}

package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>, JpaSpecificationExecutor<UserEntity> {

    UserEntity findByEmail(String email);

    Optional<UserEntity> findOneByEmailAndPassword(String email, String encodedPassword);
}

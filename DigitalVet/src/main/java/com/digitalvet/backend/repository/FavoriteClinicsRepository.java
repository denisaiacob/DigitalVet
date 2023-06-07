package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.FavoriteClinicsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface FavoriteClinicsRepository extends JpaRepository<FavoriteClinicsEntity,Long> {
    List<FavoriteClinicsEntity> findByUserId(Long userId);
}

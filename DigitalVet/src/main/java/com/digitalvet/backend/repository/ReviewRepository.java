package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<ReviewEntity, Long>, JpaSpecificationExecutor<ReviewEntity> {

    @Query("SELECT review FROM ReviewEntity review WHERE review.vetId = ?1 ORDER BY review.day DESC")
    Optional<List<ReviewEntity>> findByVetId(Long vetId);
}

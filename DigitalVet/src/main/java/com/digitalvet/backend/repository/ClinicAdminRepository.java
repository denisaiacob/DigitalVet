package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ClinicAdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClinicAdminRepository extends JpaRepository<ClinicAdminEntity, Long>, JpaSpecificationExecutor<ClinicAdminEntity> {
    @Query("SELECT admin FROM ClinicAdminEntity admin WHERE admin.user.id = :userId ")
    Optional<ClinicAdminEntity> findByUserId(@Param("userId") Long userId);
}

package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ClinicAdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicAdminRepository extends JpaRepository<ClinicAdminEntity, Long>, JpaSpecificationExecutor<ClinicAdminEntity> {
}

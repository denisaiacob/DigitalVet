package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ClinicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicRepository extends JpaRepository<ClinicEntity, Long>, JpaSpecificationExecutor<ClinicEntity> {

}

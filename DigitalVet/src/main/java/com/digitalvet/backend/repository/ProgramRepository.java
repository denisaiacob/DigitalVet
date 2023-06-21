package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ProgramEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProgramRepository extends JpaRepository<ProgramEntity, Long>, JpaSpecificationExecutor<ProgramEntity> {

    @Query("SELECT program FROM ProgramEntity program WHERE program.clinic.clinicId = :clinicId")
    Optional<ProgramEntity> findByClinicId(@Param("clinicId")Long clinicId);
}

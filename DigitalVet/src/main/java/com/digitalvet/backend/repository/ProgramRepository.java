package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ProgramEntity;
import com.digitalvet.backend.entity.VetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProgramRepository extends JpaRepository<ProgramEntity, Long>, JpaSpecificationExecutor<ProgramEntity> {

    @Query("SELECT program FROM ProgramEntity program WHERE program.clinicId = ?1")
    Optional<ProgramEntity> findByClinicId(Long clinicId);
}

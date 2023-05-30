package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.VetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VetRepository extends JpaRepository<VetEntity, Long>, JpaSpecificationExecutor<VetEntity> {
    @Query("SELECT vet FROM VetEntity vet WHERE vet.clinicId = ?1")
    Optional<List<VetEntity>> findByClinicId(Long clinicId);
}

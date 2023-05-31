package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity, Long>, JpaSpecificationExecutor<ServiceEntity> {

    @Query("SELECT service FROM ServiceEntity service WHERE service.vetId = ?1")
    Optional<List<ServiceEntity>> findByVetId(Long vetId);

    @Query("SELECT service FROM ServiceEntity service WHERE service.clinicId = ?1")
    Optional<List<ServiceEntity>>  findByClinicId(Long clinicId);
}

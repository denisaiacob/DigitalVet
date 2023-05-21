package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.VetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface VetRepository extends JpaRepository<VetEntity, Long>, JpaSpecificationExecutor<VetEntity> {

}

package com.digitalvet.backend.repository;

import com.digitalvet.backend.entity.AppointmentsEntity;
import com.digitalvet.backend.entity.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentsRepository extends JpaRepository<AppointmentsEntity, Long>,JpaSpecificationExecutor<ServiceEntity> {
    @Query("SELECT appointment FROM AppointmentsEntity appointment WHERE appointment.serviceId = ?1 ORDER BY appointment.day")
    Optional<List<AppointmentsEntity>> findByServiceId(Long serviceId);

}

package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.AppointmentsEntity;
import com.digitalvet.backend.model.AppointmentDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AppointmentService {
    ResponseEntity<AppointmentsEntity> addAppointment(Long userId, AppointmentDto appointmentDto);

    List<AppointmentDto> getAppointmentByServiceId(Long id);

    List<AppointmentDto> getAppointmentByUserId(Long id);
}

package com.digitalvet.backend.services;

import com.digitalvet.backend.model.AppointmentDto;
import java.util.List;

public interface AppointmentService {
    Long addAppointment(AppointmentDto appointmentDto);

    List<AppointmentDto> getAppointmentByServiceId(Long id);
}

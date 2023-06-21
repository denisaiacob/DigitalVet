package com.digitalvet.backend.controller;

import com.digitalvet.backend.entity.AppointmentsEntity;
import com.digitalvet.backend.model.AppointmentDto;
import com.digitalvet.backend.services.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class AppointmentsController {
    private final AppointmentService appointmentsService;

    public AppointmentsController(AppointmentService appointmentsService) {
        this.appointmentsService = appointmentsService;
    }


    @PostMapping(path = "/users/{userId}/appointments")
    public ResponseEntity<AppointmentsEntity> addAppointment(@PathVariable(value = "userId") Long userId,
                                                             @RequestBody AppointmentDto appointmentDto) {
        return appointmentsService.addAppointment(userId,appointmentDto);
    }

    @GetMapping("/appointments/{id}")
    public List<AppointmentDto> getAppointmentByServiceId(@PathVariable Long id) {
        return appointmentsService.getAppointmentByServiceId(id);
    }

    @GetMapping("/appointments/user/{userId}")
    public List<AppointmentDto> getAppointmentByUserId(@PathVariable Long userId) {
        return appointmentsService.getAppointmentByUserId(userId);
    }
}

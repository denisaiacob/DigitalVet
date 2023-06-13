package com.digitalvet.backend.controller;

import com.digitalvet.backend.model.AppointmentDto;
import com.digitalvet.backend.services.AppointmentService;
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


    @PostMapping(path = "/appointments")
    public Long addAppointment(@RequestBody AppointmentDto appointmentDto) {
        return appointmentsService.addAppointment(appointmentDto);
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

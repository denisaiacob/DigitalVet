package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.AppointmentsEntity;
import com.digitalvet.backend.model.AppointmentDto;
import com.digitalvet.backend.repository.AppointmentsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentsRepository appointmentsRepository;

    public AppointmentServiceImpl(AppointmentsRepository appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    @Override
    public Long addAppointment(AppointmentDto appointmentDto) {
        AppointmentsEntity appointment = new AppointmentsEntity(
                appointmentDto.getId(),
                appointmentDto.getDay(),
                appointmentDto.getTime(),
                appointmentDto.getServiceId(),
                appointmentDto.getUserId());

        appointmentsRepository.save(appointment);
        return appointment.getId();
    }

    @Override
    public List<AppointmentDto> getAppointmentByServiceId(Long id) {
        Optional<List<AppointmentsEntity>> appointmentsOptional = appointmentsRepository.findByServiceId(id);
        if (appointmentsOptional.isPresent()) {
            List<AppointmentsEntity> appointmentsEntities = appointmentsOptional.get();
            return appointmentsEntities.stream()
                    .map(appointment -> new AppointmentDto(
                            appointment.getId(),
                            appointment.getDay(),
                            appointment.getTime(),
                            appointment.getServiceId(),
                            appointment.getUserId()))
                    .toList();
        } else {
            throw new EntityNotFoundException("Service not found for user ID: " + id);
        }

    }

    @Override
    public List<AppointmentDto> getAppointmentByUserId(Long id) {
        Optional<List<AppointmentsEntity>> appointmentsOptional = appointmentsRepository.findByUserId(id);
        if (appointmentsOptional.isPresent()) {
            List<AppointmentsEntity> appointmentsEntities = appointmentsOptional.get();
            return appointmentsEntities.stream()
                    .map(appointment -> new AppointmentDto(
                            appointment.getId(),
                            appointment.getDay(),
                            appointment.getTime(),
                            appointment.getServiceId(),
                            appointment.getUserId()))
                    .toList();
        } else {
            throw new EntityNotFoundException("User not found for user ID: " + id);
        }
    }
}

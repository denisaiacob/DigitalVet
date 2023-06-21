package com.digitalvet.backend.services;

import com.digitalvet.backend.entity.AppointmentsEntity;
import com.digitalvet.backend.model.AppointmentDto;
import com.digitalvet.backend.repository.AppointmentsRepository;
import com.digitalvet.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentsRepository appointmentsRepository;
    private final UserRepository userRepository;

    public AppointmentServiceImpl(AppointmentsRepository appointmentsRepository, UserRepository userRepository) {
        this.appointmentsRepository = appointmentsRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<AppointmentsEntity> addAppointment(Long userId, AppointmentDto appointmentDto) {
        AppointmentsEntity appointment = new AppointmentsEntity(
                appointmentDto.getId(),
                appointmentDto.getDay(),
                appointmentDto.getTime(),
                appointmentDto.getServiceId());

        AppointmentsEntity response= userRepository.findById(userId).map(user -> {
            appointment.setUser(user);
            return appointmentsRepository.save(appointment);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found user with id = " + userId));

        return new ResponseEntity<>(response, HttpStatus.CREATED);
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
                            appointment.getUser().getId()))
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
                            appointment.getUser().getId()))
                    .toList();
        } else {
            throw new EntityNotFoundException("User not found for user ID: " + id);
        }
    }
}

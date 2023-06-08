package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import java.sql.Time;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "appointments")
public class AppointmentsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long id;

    @NotBlank
    private Date day;

    @NotBlank
    private Time time;

    @NotBlank
    private Long serviceId;

    @NotBlank
    private Long userId;

    public AppointmentsEntity() {}

    public AppointmentsEntity(Long id, Date day, Time time, Long serviceId, Long userId) {
        this.id = id;
        this.day = day;
        this.time = time;
        this.serviceId = serviceId;
        this.userId = userId;
    }

    public AppointmentsEntity(Date day, Time time, Long serviceId, Long userId) {
        this.day = day;
        this.time = time;
        this.serviceId = serviceId;
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AppointmentsEntity that)) return false;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getDay(), that.getDay()) && Objects.equals(getTime(), that.getTime()) && Objects.equals(getServiceId(), that.getServiceId()) && Objects.equals(getUserId(), that.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDay(), getTime(), getServiceId(), getUserId());
    }
}

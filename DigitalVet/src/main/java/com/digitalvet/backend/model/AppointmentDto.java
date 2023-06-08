package com.digitalvet.backend.model;

import java.sql.Time;
import java.util.Date;

public class AppointmentDto {
    private Long id;
    private Date day;
    private Time time;
    private Long serviceId;
    private Long userId;

    public AppointmentDto() {}

    public AppointmentDto(Long id, Date day, Time time, Long serviceId, Long userId) {
        this.id = id;
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
}

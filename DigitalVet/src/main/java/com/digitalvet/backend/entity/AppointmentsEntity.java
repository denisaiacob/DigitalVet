package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private UserEntity user;

    public AppointmentsEntity() {}

    public AppointmentsEntity(Long id, Date day, Time time, Long serviceId, UserEntity user) {
        this.id = id;
        this.day = day;
        this.time = time;
        this.serviceId = serviceId;
        this.user = user;
    }

    public AppointmentsEntity(Long id, Date day, Time time, Long serviceId) {
        this.id = id;
        this.day = day;
        this.time = time;
        this.serviceId = serviceId;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
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
        return Objects.equals(getId(), that.getId()) && Objects.equals(getDay(), that.getDay()) && Objects.equals(getTime(), that.getTime()) && Objects.equals(getServiceId(), that.getServiceId()) && Objects.equals(getUser(), that.getUser());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDay(), getTime(), getServiceId(), getUser());
    }

    @Override
    public String toString() {
        return "AppointmentsEntity{" +
                "id=" + id +
                ", day=" + day +
                ", time=" + time +
                ", serviceId=" + serviceId +
                ", user=" + user +
                '}';
    }
}

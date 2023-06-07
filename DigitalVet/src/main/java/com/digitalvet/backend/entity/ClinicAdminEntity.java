package com.digitalvet.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import javax.validation.constraints.NotBlank;
import java.util.Objects;

@Entity
@Table(name="clinic_admin")
public class ClinicAdminEntity {
    @NotBlank
    private Long clinicId;

    @Id
    private Long userId;

    public ClinicAdminEntity() {}

    public ClinicAdminEntity(Long clinicId, Long userId) {
        this.clinicId = clinicId;
        this.userId = userId;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClinicAdminEntity that)) return false;
        return Objects.equals(getClinicId(), that.getClinicId()) && Objects.equals(getUserId(), that.getUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getClinicId(), getUserId());
    }

    @Override
    public String toString() {
        return "ClinicAdminEntity{" +
                "clinicId=" + clinicId +
                ", userId=" + userId +
                '}';
    }
}

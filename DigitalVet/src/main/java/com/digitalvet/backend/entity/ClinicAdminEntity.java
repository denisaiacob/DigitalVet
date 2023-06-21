package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import java.util.Objects;

@Entity
@Table(name="clinic_admin",uniqueConstraints = {@UniqueConstraint(columnNames = "user_id")})
public class ClinicAdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long id;

    @NotBlank
    private Long clinicId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public ClinicAdminEntity() {}

    public ClinicAdminEntity(Long id, Long clinicId) {
        this.id = id;
        this.clinicId = clinicId;
    }

    public ClinicAdminEntity(Long clinicId, UserEntity user) {
        this.clinicId = clinicId;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClinicAdminEntity that)) return false;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getClinicId(), that.getClinicId()) && Objects.equals(getUser(), that.getUser());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getClinicId(), getUser());
    }

    @Override
    public String toString() {
        return "ClinicAdminEntity{" +
                "id=" + id +
                ", clinicId=" + clinicId +
                ", user=" + user +
                '}';
    }
}

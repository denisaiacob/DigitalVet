package com.digitalvet.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Objects;

@Entity
@Table(name = "program")
public class ProgramEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long programId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "clinic_id")
    private ClinicEntity clinic;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String monday;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String tuesday;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String wednesday;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String thursday;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String friday;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String saturday;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String sunday;

    public ProgramEntity() {
    }

    public ProgramEntity(Long programId, String monday, String tuesday, String wednesday, String thursday, String friday, String saturday, String sunday) {
        this.programId = programId;
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }

    public Long getProgramId() {
        return programId;
    }

    public ClinicEntity getClinic() {
        return clinic;
    }

    public void setClinic(ClinicEntity clinic) {
        this.clinic = clinic;
    }

    public String getMonday() {
        return monday;
    }

    public void setMonday(String monday) {
        this.monday = monday;
    }

    public String getTuesday() {
        return tuesday;
    }

    public void setTuesday(String tuesday) {
        this.tuesday = tuesday;
    }

    public String getWednesday() {
        return wednesday;
    }

    public void setWednesday(String wednesday) {
        this.wednesday = wednesday;
    }

    public String getThursday() {
        return thursday;
    }

    public void setThursday(String thursday) {
        this.thursday = thursday;
    }

    public String getFriday() {
        return friday;
    }

    public void setFriday(String friday) {
        this.friday = friday;
    }

    public String getSaturday() {
        return saturday;
    }

    public void setSaturday(String saturday) {
        this.saturday = saturday;
    }

    public String getSunday() {
        return sunday;
    }

    public void setSunday(String sunday) {
        this.sunday = sunday;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProgramEntity that)) return false;
        return Objects.equals(getProgramId(), that.getProgramId()) && Objects.equals(getClinic(), that.getClinic()) && Objects.equals(getMonday(), that.getMonday()) && Objects.equals(getTuesday(), that.getTuesday()) && Objects.equals(getWednesday(), that.getWednesday()) && Objects.equals(getThursday(), that.getThursday()) && Objects.equals(getFriday(), that.getFriday()) && Objects.equals(getSaturday(), that.getSaturday()) && Objects.equals(getSunday(), that.getSunday());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProgramId(), getClinic(), getMonday(), getTuesday(), getWednesday(), getThursday(), getFriday(), getSaturday(), getSunday());
    }

    @Override
    public String toString() {
        return "ProgramEntity{" +
                "programId=" + programId +
                ", clinic=" + clinic +
                ", monday='" + monday + '\'' +
                ", tuesday='" + tuesday + '\'' +
                ", wednesday='" + wednesday + '\'' +
                ", thursday='" + thursday + '\'' +
                ", friday='" + friday + '\'' +
                ", saturday='" + saturday + '\'' +
                ", sunday='" + sunday + '\'' +
                '}';
    }
}



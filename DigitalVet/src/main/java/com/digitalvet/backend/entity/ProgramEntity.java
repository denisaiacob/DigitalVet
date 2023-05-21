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

    @NotBlank(message = "Program is mandatory")
    private Long clinicId;

    @NotBlank(message = "Program is mandatory")
    @Pattern(regexp = "^[\\w\\s.,'-]*$", message = "Invalid program")
    private String months;

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

    public ProgramEntity() {}

    public ProgramEntity(Long programId, Long clinicId, String months, String tuesday, String wednesday, String thursday, String friday, String saturday, String sunday) {
        this.programId = programId;
        this.clinicId = clinicId;
        this.months = months;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }

    public ProgramEntity(Long clinicId, String months, String tuesday, String wednesday, String thursday, String friday, String saturday, String sunday) {
        this.clinicId = clinicId;
        this.months = months;
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

    public void setProgramId(Long programId) {
        this.programId = programId;
    }

    public Long getClinicId() {
        return clinicId;
    }

    public void setClinicId(Long clinicId) {
        this.clinicId = clinicId;
    }

    public String getMonths() {
        return months;
    }

    public void setMonths(String months) {
        this.months = months;
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
        return Objects.equals(getProgramId(), that.getProgramId()) && Objects.equals(getClinicId(), that.getClinicId()) && Objects.equals(getMonths(), that.getMonths()) && Objects.equals(getTuesday(), that.getTuesday()) && Objects.equals(getWednesday(), that.getWednesday()) && Objects.equals(getThursday(), that.getThursday()) && Objects.equals(getFriday(), that.getFriday()) && Objects.equals(getSaturday(), that.getSaturday()) && Objects.equals(getSunday(), that.getSunday());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProgramId(), getClinicId(), getMonths(), getTuesday(), getWednesday(), getThursday(), getFriday(), getSaturday(), getSunday());
    }

    @Override
    public String toString() {
        return "ProgramEntity{" +
                "programId=" + programId +
                ", clinicId=" + clinicId +
                ", months='" + months + '\'' +
                ", tuesday='" + tuesday + '\'' +
                ", wednesday='" + wednesday + '\'' +
                ", thursday='" + thursday + '\'' +
                ", friday='" + friday + '\'' +
                ", saturday='" + saturday + '\'' +
                ", sunday='" + sunday + '\'' +
                '}';
    }
}



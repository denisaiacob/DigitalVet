package com.digitalvet.backend.model;

public class ClinicAdminDto {
    private Long clinicId;
    private Long userId;

    public ClinicAdminDto() {}

    public ClinicAdminDto(Long clinicId, Long userId) {
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


}

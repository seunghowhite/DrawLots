package com.drawLots.Backend.domain.users.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.util.Arrays;

@Getter
public enum Team {
    SERVICE_TEAM("서비스플랫폼"),
    DATA_TEAM("데이터융합"),
    HEALTH_TEAM("헬스케어솔루션"),
    PLAN_TEAM("전략기획"),
    MANAGER_TEAM("경영지원"),
    LAB("연구소");

    private final String displayName;

    Team(String displayName) {
        this.displayName = displayName;
    }

    @JsonValue
    public String getDisplayName() {
        return displayName;
    }

    @JsonCreator
    public static Team fromDisplayName(String displayName) {
        return Arrays.stream(Team.values())
                .filter(e -> e.displayName.equals(displayName))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("팀 이름을 찾을 수 없다 :" + displayName));
    }

}
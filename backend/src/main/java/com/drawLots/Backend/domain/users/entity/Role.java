package com.drawLots.Backend.domain.users.entity;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

import java.util.Arrays;

@Getter
public enum Role {
    ROLE_USER("선임"),
    ROLE_LEADER("팀장"),
    ROLE_ADMIN("관리자");

    private final String displayName;

    Role(String displayName) {
        this.displayName = displayName;
    }

    @JsonValue
    public String getDisplayName() {
        return displayName;
    }

    @JsonCreator
    public static Role fromDisplayName(String displayName) {
        return Arrays.stream(Role.values())
                .filter(e -> e.displayName.equals(displayName))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("잘못된 직급:" + displayName));
    }

}
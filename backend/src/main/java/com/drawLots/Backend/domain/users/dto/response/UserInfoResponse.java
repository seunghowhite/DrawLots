package com.drawLots.Backend.domain.users.dto.response;

import com.drawLots.Backend.domain.users.entity.Users;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class UserInfoResponse {

    private final String username;

    private final String team;

    private final String role;


    public static UserInfoResponse fromEntity(Users users) {
        return new UserInfoResponse(
                users.getUsername(),
                users.getTeam().getDisplayName(),
                users.getRole().getDisplayName());
    }

}
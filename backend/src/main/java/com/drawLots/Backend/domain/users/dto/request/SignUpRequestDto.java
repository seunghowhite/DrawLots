package com.drawLots.Backend.domain.users.dto.request;

import com.drawLots.Backend.domain.users.entity.Role;
import com.drawLots.Backend.domain.users.entity.Team;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignUpRequestDto {

    private String username;
    private String password;
    private String team;
    private String role;

    public SignUpRequestDto(String username, String password, String team, String role) {
        this.username = username;
        this.password = password;
        this.team = team;
        this.role = role;
    }

    public Team getTeamEnum() {
        return Team.fromDisplayName(this.team);
    }

    public Role getRoleEnum() {
        return Role.fromDisplayName(this.role);
    }
}
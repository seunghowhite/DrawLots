package com.drawLots.Backend.domain.users.entity;

import com.drawLots.Backend.global.BaseEntity;
import lombok.*;
import jakarta.persistence.*;

@Getter
@AllArgsConstructor
@Entity
@Builder
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "users")
public class Users extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    private String password;

    @Enumerated(EnumType.STRING)
    private Team team;

    @Enumerated(EnumType.STRING)
    private Role role;

}
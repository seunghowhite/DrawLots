package com.drawLots.Backend.domain.users.repository;

import com.drawLots.Backend.domain.users.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {
}

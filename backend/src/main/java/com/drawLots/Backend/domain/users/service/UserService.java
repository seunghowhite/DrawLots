package com.drawLots.Backend.domain.users.service;

import com.drawLots.Backend.domain.users.dto.request.SignUpRequestDto;
import com.drawLots.Backend.domain.users.dto.response.UserInfoResponse;
import com.drawLots.Backend.domain.users.entity.Users;
import com.drawLots.Backend.domain.users.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UsersRepository usersRepository;

//    private final PasswordEncoder passwordEncoder; // 추후 추가 예정

    public void signUp(SignUpRequestDto requestDto) {
//        String encodedPassword = passwordEncoder.encode(requestDto.getPassword());
        Users user = Users.builder()
                .username(requestDto.getUsername())
                .password(requestDto.getPassword())
                .team(requestDto.getTeamEnum())
                .role(requestDto.getRoleEnum())
                .build();
        // DB에 저장
        usersRepository.save(user);
    }

    public UserInfoResponse getUserInfo(Long id) {
        Users users = usersRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
        return UserInfoResponse.fromEntity(users);
    }


}

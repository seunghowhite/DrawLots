package com.drawLots.Backend.domain.users.controller;

import com.drawLots.Backend.domain.users.dto.request.SignUpRequestDto;
import com.drawLots.Backend.domain.users.service.UserService;
import com.drawLots.Backend.domain.users.dto.response.UserInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {


    private final UserService userService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void signUp(@RequestBody SignUpRequestDto signUpRequestDto) {
        userService.signUp(signUpRequestDto);
    }

    @GetMapping("/{id}")
    public UserInfoResponse getUserInfo(@PathVariable Long id) {
        return userService.getUserInfo(id);
    }



}

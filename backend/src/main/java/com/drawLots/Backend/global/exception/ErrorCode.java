package com.drawLots.Backend.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public enum ErrorCode {

    // Common
    MEMBER_NOT_FOUND(HttpStatus.UNAUTHORIZED, "U001", "사용자를 찾을 수 없습니다."),
    MEMBER_NOT_ACTIVATED(HttpStatus.BAD_REQUEST, "U002", "사용자가 활성화 상태가 아닙니다."),
    AUTHENTICATION_FAILED(HttpStatus.FORBIDDEN, "U003", "권한이 없는 요청입니다. 토큰을 추가해주세요."),
    ACCESS_TOKEN_IS_INVALID(HttpStatus.UNAUTHORIZED, "U004", "엑세스 토큰이 유효하지 않습니다."),
    REFRESH_TOKEN_IS_INVALID(HttpStatus.UNAUTHORIZED, "U005", "리프레시 토큰이 유효하지 않습니다.");

    private HttpStatus status;
    private String code;
    private String message;

    ErrorCode(HttpStatus status, String code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }

}
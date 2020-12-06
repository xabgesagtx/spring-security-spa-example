package com.github.xabgesagtx.springgatewaysecurityspa;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class LoginController {

    @PostMapping("/api/login")
    public Map<String, String> login(Principal principal) {
        return Map.of("message", "Login successful", "username", principal.getName());
    }
}

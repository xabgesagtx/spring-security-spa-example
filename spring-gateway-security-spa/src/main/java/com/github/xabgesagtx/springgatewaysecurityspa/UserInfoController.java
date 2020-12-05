package com.github.xabgesagtx.springgatewaysecurityspa;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class UserInfoController {

    @GetMapping("/api/user")
    public Map<String,String> userInfo(Principal principal) {
        return Map.of("name", principal.getName());
    }
}

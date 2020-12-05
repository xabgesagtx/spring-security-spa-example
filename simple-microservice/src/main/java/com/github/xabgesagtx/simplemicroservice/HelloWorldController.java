package com.github.xabgesagtx.simplemicroservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloWorldController {

    @GetMapping("hello")
    public Map<String,String> helloWorld() {
        return Map.of("hello", "world");
    }

}

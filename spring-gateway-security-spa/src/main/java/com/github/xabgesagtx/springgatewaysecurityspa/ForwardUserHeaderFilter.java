package com.github.xabgesagtx.springgatewaysecurityspa;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.security.Principal;

@Component
public class ForwardUserHeaderFilter implements GlobalFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        return exchange.getPrincipal()
                .map(Principal::getName)
                .defaultIfEmpty("anonymous")
                .map(userName -> {
                    exchange.getRequest().mutate().header("X-Authenticated-User", userName).build();
                    return exchange;
                })
                .flatMap(chain::filter);
    }
}

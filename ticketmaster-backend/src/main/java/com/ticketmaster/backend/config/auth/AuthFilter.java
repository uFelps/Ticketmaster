package com.ticketmaster.backend.config.auth;

import com.ticketmaster.backend.repositories.UserRepository;
import com.ticketmaster.backend.service.exceptions.DataNotFoundException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class AuthFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository repository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        var token = buscarToken(request);

        if (token != null) {
            String subject = tokenService.validarToken(token);

            UserDetails user = repository.findByEmail(subject);

            var credentials = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(credentials);
        }

        filterChain.doFilter(request, response);
    }

    private String buscarToken(HttpServletRequest request) {
        var token = request.getHeader("Authorization");

        if (token != null) {
            return token.replace("Bearer ", "");
        }

        return null;
    }
}

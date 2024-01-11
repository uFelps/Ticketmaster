package com.ticketmaster.backend.config.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.ticketmaster.backend.entities.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String gerarToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);

            return JWT.create()
                    .withIssuer("ticketmaster-api")
                    .withSubject(user.getEmail())
                    .sign(algorithm);

        } catch (JWTCreationException e) {
            throw new RuntimeException("Erro ao criar o token");
        }
    }

    public String validarToken(String token){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);

            return JWT.require(algorithm)
                    .withIssuer("ticketmaster-api")
                    .build()
                    .verify(token)
                    .getSubject();

        }catch (JWTVerificationException e){
            throw new RuntimeException("Token Inválido");
        }
    }

    private Instant dataExpiracao() {
        return LocalDateTime.now().plusYears(3).toInstant(ZoneOffset.of("-03:00"));
    }
}

package com.ticketmaster.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginDTO {

    @NotBlank(message = "O email não deve ser vazio")
    @Email(message = "Insira um email válido")
    @Size(max=30, min = 9, message = "O email deve ter entre 9 a 30 caracteres")
    private String email;

    @NotBlank(message = "A senha não deve ser vazia")
    @Size(max=12, min = 5, message = "A senha deve ter entre 5 a 12 caracteres")
    private String senha;
}

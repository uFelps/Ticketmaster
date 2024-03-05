package com.ticketmaster.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SignupDTO {

    @NotBlank(message = "O nome não deve estar vazio")
    @Size(max=30, min = 3, message = "O nome deve ter entre 3 a 30 caracteres")
    private String nome;

    @NotBlank(message = "O email não deve ser vazio")
    @Email(message = "Insira um email válido")
    @Size(max=30, min = 9, message = "O email deve ter entre 9 a 30 caracteres")
    private String email;

    @NotBlank(message = "A senha não deve ser vazia")
    @Size(max=12, min = 5, message = "A senha deve ter entre 5 a 12 caracteres")
    private String senha;


    @NotBlank(message = "O telefone não deve estar vazio")
    @Size(max=15, min = 15, message = "O telefone deve ter entre 15 caracteres")
    private String telefone;

    @NotBlank(message = "O CPF não deve estar vazio")
    @Size(max=14, min = 14, message = "O cpf deve ter entre 15 caracteres")
    private String cpf;

    @NotBlank(message = "A cidade não deve estar vazia")
    private String cidade;

}

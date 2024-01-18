package com.ticketmaster.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SignupDTO {

    private String nome;
    private String email;
    private String senha;
    private String telefone;
    private String cpf;
    private String cidade;

}

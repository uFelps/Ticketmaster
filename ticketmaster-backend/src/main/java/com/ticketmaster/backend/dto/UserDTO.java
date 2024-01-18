package com.ticketmaster.backend.dto;

import com.ticketmaster.backend.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDTO {

    Long id;
    String nome;
    String email;
    String telefone;
    String cpf;
    String cidade;
    String token;
    public UserDTO(User user, String token) {
        this.id = user.getId();
        this.nome = user.getNome();
        this.email = user.getEmail();
        this.telefone = user.getTelefone();
        this.cpf = user.getCpf();
        this.cidade = user.getCidade();
        this.token = token;
    }

}

package com.ticketmaster.backend.service;

import com.ticketmaster.backend.dto.SetorDTO;
import com.ticketmaster.backend.entities.Espaco;
import com.ticketmaster.backend.entities.Setor;
import com.ticketmaster.backend.repositories.EspacoRepository;
import com.ticketmaster.backend.repositories.SetorRepository;
import com.ticketmaster.backend.service.exceptions.DataNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EspacoService {


    @Autowired
    private EspacoRepository repository;

    @Autowired
    private SetorRepository setorRepository;

    @Transactional
    public List<SetorDTO> buscarSetoresPorEspaco(String espaco) {

       try{
           Espaco espaco1 = repository.findByNome(espaco);

           List<Setor> setores = setorRepository.findAllByEspaco(espaco1);

           return setores.stream().map(SetorDTO::new).toList();
       }catch (Exception e){
           throw new DataNotFoundException("Objeto não encontrado");
       }

    }
}

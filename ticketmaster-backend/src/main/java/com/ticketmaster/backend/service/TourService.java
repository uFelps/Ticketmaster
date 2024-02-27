package com.ticketmaster.backend.service;

import com.ticketmaster.backend.dto.TourDTO;
import com.ticketmaster.backend.entities.Artista;
import com.ticketmaster.backend.entities.Tour;
import com.ticketmaster.backend.repositories.ArtistaRepository;
import com.ticketmaster.backend.repositories.TourRepository;
import com.ticketmaster.backend.service.exceptions.DataNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TourService {

    @Autowired
    private TourRepository repository;

    @Autowired
    private ArtistaRepository artistaRepository;

    @Transactional
    public Page<TourDTO> findAllTours(Pageable pageable) {
        Page<Tour> tours = repository.findAll(pageable);

        return tours.map(TourDTO::new);
    }

    @Transactional
    public Page<TourDTO> buscarPorCategoria(Pageable pageable,String categoria) {

        Page<Tour> tours = repository.findAllByCategoria(pageable, categoria);

        return tours.map(TourDTO::new);
    }

    @Transactional
    public TourDTO buscarTourPorArtista(String nome) {

        try{
            Artista artista = artistaRepository.findByNome(nome.replaceAll("-", " ")).get();

            return new TourDTO(repository.findByArtista(artista));
        }
        catch (Exception exception){
            throw new DataNotFoundException("Tour não encontrada");
        }

    }


}

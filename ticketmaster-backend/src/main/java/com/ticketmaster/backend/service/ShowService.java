package com.ticketmaster.backend.service;

import com.ticketmaster.backend.dto.ShowDTO;
import com.ticketmaster.backend.entities.Cidade;
import com.ticketmaster.backend.entities.Show;
import com.ticketmaster.backend.entities.Tour;
import com.ticketmaster.backend.repositories.CidadeRepository;
import com.ticketmaster.backend.repositories.EspacoRepository;
import com.ticketmaster.backend.repositories.ShowRepository;
import com.ticketmaster.backend.repositories.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ShowService {

    @Autowired
    private TourRepository tourRepository;

    @Autowired
    private ShowRepository repository;

    @Autowired
    private CidadeRepository cidadeRepository;

    @Transactional
    public Page<ShowDTO> getShowsofTour(Pageable pageable, Long idTour){

        Tour tour = tourRepository.getReferenceById(idTour);

        Page<Show> shows = repository.findByTour(pageable, tour);

        return shows.map(ShowDTO::new);
    }

    @Transactional
    public Page<ShowDTO> findShowsByCity(String cidade, Pageable pageable) {


        Cidade citydata = cidadeRepository.findByNome(cidade.replace("_", " "));

        Page<Show> shows = repository.findByCidade(citydata, pageable);

        return shows.map(ShowDTO::new);
    }
}

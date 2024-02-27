package com.ticketmaster.backend.service;

import com.sun.tools.jconsole.JConsoleContext;
import com.ticketmaster.backend.dto.CartaoDTO;
import com.ticketmaster.backend.dto.ItemCarrinhoDTO;
import com.ticketmaster.backend.dto.PagamentoDTO;
import com.ticketmaster.backend.entities.*;
import com.ticketmaster.backend.entities.enuns.StatusIngresso;
import com.ticketmaster.backend.entities.enuns.StatusPedido;
import com.ticketmaster.backend.repositories.*;
import com.ticketmaster.backend.service.exceptions.CarrinhoException;
import com.ticketmaster.backend.service.exceptions.DataNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CarrinhoService {

    @Autowired
    private ItemCarrinhoRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private IngressoRepository ingressoRepository;

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private CartaoRepository cartaoRepository;

    @Transactional
    public List<ItemCarrinhoDTO> buscarCarrinhoPorUsuario(String email) {

        try {
            User user = userRepository.findByEmailReturnUser(email);
            List<ItemCarrinho> carrinho = repository.findAllByUser(user);

            return carrinho.stream().map(ItemCarrinhoDTO::new).toList();

        } catch (Exception e) {
            throw new DataNotFoundException("Data not Found");
        }
    }

    public Boolean adicionarItemAoCarrinho(List<ItemCarrinhoDTO> dtos, String email) {


        User user = userRepository.findByEmailReturnUser(email);

        dtos.forEach((dto) -> {
            System.out.println(dto);
            Show show = showRepository.findById(dto.getShow().getId()).get();

            ItemCarrinho item = new ItemCarrinho(null, dto.getSetor(), dto.getTipo(), dto.getValor(), show, user);
            repository.save(item);
        });

        return true;
    }

    public Void removerItemDoCarrinho(Long idItem) {

        try {
            repository.deleteById(idItem);

            return null;
        } catch (Exception e) {
            throw new DataNotFoundException("Erro ao deletar objeto");
        }
    }

    public Boolean finalizarCompra(PagamentoDTO pagamentoDTO, String email) {


        //buscando o usuario responsavel pela compra
        User user = userRepository.findByEmailReturnUser(email);

        Cartao cartao = null;
        String metodoPagamento = "Pix";

        if(pagamentoDTO.getCartao() != null){
            //verificando se é um novo cartão ou salvando um novo
            cartao = buscarCartao(pagamentoDTO.getCartao(), user);
            metodoPagamento = "Cartão";
        }


        //gerando um novo pedido
        Pedido pedido = pedidoRepository.save(new Pedido(null, LocalDateTime.now(), StatusPedido.APROVADO, metodoPagamento, pagamentoDTO.getTotal(), cartao, user, new ArrayList<>()));


        //loop para buscar os shows e gerar os ingressos
        pagamentoDTO.getIngressos().forEach((ingressoDTO -> {
            Show show = showRepository.findById(ingressoDTO.getShow().getId()).get();
            Ingresso ingresso = new Ingresso(null, show, pedido, user, ingressoDTO.getTipo(), ingressoDTO.getSetor(), ingressoDTO.getValor(), StatusIngresso.DISPONIVEL);
            ingressoRepository.save(ingresso);
        }));



        //deletando itens do carrinho
        pagamentoDTO.getIdItemCarrinho().forEach((item) -> repository.deleteById(item));

        return Boolean.TRUE;

    }


    private Cartao buscarCartao(CartaoDTO dto, User user) {

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


        Cartao cartao = cartaoRepository.findByNumero(dto.getNumero());

        if (cartao != null) {
            if (passwordEncoder.matches(dto.getCvv(), cartao.getCvv())) {
                cartaoRepository.save(cartao);
            }
        }
        else {
            cartao = new Cartao(null ,dto.getNumero(), dto.getTitular(), passwordEncoder.encode(dto.getCvv()), dto.getValidade(), dto.getNumIdentificador(), dto.getSaveCartao(), dto.getBandeira(), user, new ArrayList<>());
            cartaoRepository.save(cartao);
        }


        return cartao;
    }
}

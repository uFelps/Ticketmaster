// src/context/AuthContext.jsx

/*  Um contexto compartilha dados entre os componentes, 
    assim as informações podem ser acessadas em diferentes 
    partes da aplicação sem precisar da utilização de props.*/

import React from "react";
export const AuthContext = React.createContext(null);

/*
        Aqui ficará armazenado um objeto com as propriedades 
        user, signin e signout, que são disponibilizadas pelo AuthProvider.
    
        Os componentes filhos acessarão essas propriedades usando o hook useContext
    */

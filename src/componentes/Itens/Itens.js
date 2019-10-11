import React, {useState} from 'react';
import './Itens.scss'
import Botão from '../Botão/Botão';

const Itens = ({nome, imagem, preço,}) => {

    return (
      <div className="itens">
        <img src={imagem} alt=""/>
        <h2 nome={nome} ></h2>
        <h4 preço={preço} ></h4>
        <Botão>Comprar</Botão>
      </div>
     
    )
  }
  export default Itens;
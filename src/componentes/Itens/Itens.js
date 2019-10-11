import React, {useState} from 'react';
import './Itens.scss'
import Botão from '../Botão/Botão';

const Itens = ({nome, imagem, preço,}) => {

    return (
      <div className="itens">
        <img src={imagem} alt=""/>
        <h2>{nome}</h2>
        <h4>{preço}</h4>
        <button>-</button>
        <button>+</button>
        <Botão>Comprar</Botão>
      </div>
     
    )
  }
  export default Itens;
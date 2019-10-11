import React, {useState} from 'react';
import './Itens.scss'
import Botão from '../Botão/Botão';

const Itens = ({nome, imagem, preço,}) => {
  const [quantidade, setQuantidade] = useState (0);

  const Adicionar =() =>{
    if(quantidade < 10 )
    setQuantidade(quantidade + 1)
  }
  const Remover =() =>{
    if(quantidade > 0 )
    setQuantidade(quantidade - 1)
  }


    return (
      <div className="itens">
        <img src={imagem} alt=""/>
        <h2>{nome}</h2>
        <h3>{preço}</h3>
        <h4>{quantidade}</h4>
        <button onClick={Remover}>-</button>
        <button onClick={Adicionar}>+</button>
        <Botão>Comprar</Botão>
      </div>
     
    )
  }
  export default Itens;
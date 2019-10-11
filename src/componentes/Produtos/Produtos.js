import React from 'react';
import './Produtos.scss';
import Itens from '../Itens/Itens';
import Kitkat from '../../Imagens/kitkat.jpeg';
import  Mms from '../../Imagens/Mms.jpeg';
import  Oreo from '../../Imagens/oreo.jpeg';
import  Ovomaltine from '../../Imagens/ovomaltine.jpeg';

const Produtos = () => {
    return (
      <div >
        <div className="style">
        <h1>Ice creams</h1>
        </div>
        <div className="primeiroBloco">
        <Itens imagem={Oreo} nome="Sorvete de Oreo"  preço="Valor: R$10,00">
        </Itens>
        <Itens imagem={Mms} nome="Sorvete de Mm's"  preço="Valor: R$8,00">
        </Itens>
        </div>
        <div className="segundoBloco">
        <Itens imagem={Ovomaltine} nome="Sorvete de Ovomaltine"  preço="Valor: R$7,00">
        </Itens>
        <Itens imagem={Kitkat} nome="Sorvete de Kitkat"  preço="Valor: R$10,00">
        </Itens>
        </div>
        
      </div>
     
    )
  }
  export default Produtos;
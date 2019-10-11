import React, {useState} from 'react';
import './Botão.scss'

const Botão = ({children}) => {
    return (
        <button className="Botao">{children}</button>
    )
}


export default Botão;
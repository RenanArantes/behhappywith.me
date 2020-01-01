import React from 'react';
import Image from '../Image/image.js';
import './buttonImage.css';
import bg from '../Image/img/botoes.png';

export default function ButtonImage(props) {    
    let estilo = {};
    let index = 0;

    if (props.posicao === 'direita') {
        estilo.float = 'right'
        index = 1
    } else {
        estilo.float = 'left'
        index = 0
    }
    
    const tamanho = 30;

    let propriedades = Object.assign({},props);        
    delete propriedades.posicao;

    return (
        <div
            style={estilo}
            className='option-image-scroller'
            {...propriedades}
        >
            <Image
                eixoX={index}
                eixoY={0}
                width={tamanho}
                height={tamanho}
                backgroundHeight={tamanho}
                arquivo={bg}
            />
        </div>
    )
}
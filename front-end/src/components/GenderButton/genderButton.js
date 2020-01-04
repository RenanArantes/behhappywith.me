import React from 'react';
import './genderButton.css';
import GenderImage from '../GenderImage/genderImage.js';

export default function GenderButton(props) {
    return(
        <a 
            className={
                props.selecionado ?
                "gender-button selected-gender-button" :
                "gender-button"
            }
            href="#!"
            onClick={e => props.atualizarGenero(e,props.genero)}
        >
            <GenderImage
                genero={props.genero}
            />
        </a>
    )
}
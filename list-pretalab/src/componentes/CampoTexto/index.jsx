import React from 'react';
import './CampoTexto.css';

//Aqui criamos a const que está escutando o usuário digitar no campo
const CampoTexto = (props) => {
    const aoDigitarNoCampo = (evento) => {
        props.aoAlterarCampo(evento.target.value)
       
    }

    //Aqui estamos criando uma props que permite que escrevamos a placeholder no campo texto
    const placeholderModificada = `${props.placeholder} ...`;

    return (
        <div className='campo-texto'>
            
            {/*Aqui nós melhoramos  a label, com as props*/}
            <label>{props.label}</label>
            <input onChange={aoDigitarNoCampo} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;
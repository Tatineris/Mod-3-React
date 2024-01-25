import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Banner.module.css';
import Menu from './Menu';

//criando meu componente sempre com letra maiúscula
const Banner = () => {
    return (
        <div>
            <BrowserRouter>
               <Menu />
            </BrowserRouter>
            
            <header className='banner'>
            <img src="/imagens/banner.jpg" alt="O banner principal da minha aplicação"/>
            </header>
    </div>
    ) 
}

export default Banner;
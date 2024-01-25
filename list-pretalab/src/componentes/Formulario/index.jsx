import React from 'react';
import CampoTexto from "../CampoTexto"
import Botao from "../Botao";
import styles from'./Formulario.module.css';
import ListaSuspensa from "../ListaSuspensa"
import { useState } from "react";
import SelectPokemon from "../SelectPokemon";
import CampoCep from "../CampoCep";

const Formulario = ({aoReferenciaCadastrada}) => {
    const areas = [
    'Gestão de Projetos',
    'UX e Design',
    'Desenvolvimento',
    'DevOps',
    'Data Science',
    'Mobile',
    'Inovação e Gestão',
    'Segurança da Informação',
    'Cloud Computing',
    'Redes e Infraestrutura'
   ]; 
  
 const [nome, setNome] = useState('');
 const [cargo, setCargo] = useState('');
 const [imagem, setImagem] = useState('');
 const [time, setTime] = useState('');
 const [pokemonEscolhido, setPokemonEscolhido] = useState('');
 const [cep, setCep] = useState('');
 const [endereco, setEndereco] = useState('');
 
 const aoSalvar = (evento) => {
    evento.preventDefault();
    const novoCard = {
      nome,
      cargo,
      imagem,
      time,
      pokemonEscolhido, //Incluindo o Pokémon escolhido nos dados do card
      cep,
      endereco
   }
   aoReferenciaCadastrada(novoCard);
   console.log(novoCard);
 }

    return (
        <section className={styles.formulario}>
           <form onSubmit={aoSalvar}>
              <h3>Preencha com os dados de uma mulher referência para criar um card</h3>
             <CampoTexto
                 obrigatorio={true} 
                 label='Nome' 
                 placeholder='Digite seu nome' 
                 valor={nome}
                 aoAlterarCampo={valor => setNome(valor)}
             />
             <CampoTexto 
                 obrigatorio={true}
                 label='Cargo' 
                 placeholder='Digite seu cargo'
                 valor={cargo}
                 aoAlterarCampo={valor => setCargo(valor)}
             />
             <CampoTexto
                obrigatorio={true}
                label='Imagem'
                placeholder='Insira a url da imagem'
                valor={imagem}
                aoAlterarCampo={valor => setImagem(valor)}
             />

             <ListaSuspensa 
               label = 'Sua referência trabalha com:'
               itens = {areas}
               valor = {time}
               aoAlterarCampo = {(valor) => setTime(valor)}
             />
             {/* Incluindo o componente SelectPokemon no formulário */}
             <SelectPokemon
               label='Escolha um Pokemon:'
               aoSelecionarPokemon={setPokemonEscolhido}  
             />
             <CampoCep 
               obrigatorio={true}
               label = 'CEP'
               labelEndereco = 'Endereço'
               placeholder='Digite seu CEP: '
               aoAlterarCampo={setCep}
               aoPreencherEndereco={setEndereco}
               
             />
             
             <Botao>Criar card</Botao>
           </form>
        </section>
    )
}
export default Formulario
import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import './formulario.css'




const Formulario = (props)=> {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    


    function aoSalvar(evento) {   //função de mentirinha, ao dar submit no form, não recarrega
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})

        setCargo("")
        setImagem("")
        setNome("")
        setTime("")
    }

      
    return(
    <section className='formulario'>
        <form onSubmit={aoSalvar}> 

        <h2>Preencha o card para criar o cadastro do colaborador</h2>

        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o seu nome"
            valor = {nome}
            aoAlterado = {valor => setNome(valor)}/>

        <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite o seu cargo"
            valor = {cargo}
            aoAlterado = {valor => setCargo(valor)}/>

        <CampoTexto 
            label="Imagem" 
            placeholder="cole o endereço da imagem"
            valor = {imagem}
            aoAlterado = {valor => setImagem(valor)}/>
            

        <ListaSuspensa 
            obrigatorio={true} 
            label = "Time" 
            itens = {props.times}
            valor = {time}
            aoAlterado = {valor => setTime(valor)}            
            />

        <Botao>
            Criar Card
        </Botao>

        </form>
    </section>
    )   
}


export default Formulario
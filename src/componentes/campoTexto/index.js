import { useState } from 'react'
import './campoTexto.css'




 const CampoTexto = (props)=> {    //criando função, exigindo propriedades do app main

  

    const aoDigitado = (evento)=> { //criando uma função secundaria, com obj de salvar o valor
        props.aoAlterado(evento.target.value)
 
    }



    return (
        <div className="campo-texto">
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
//onChange quer dizer ao alterar algo nesse input, chame a função aoDigitado
//aoDigitado captura e guarda o valor digitado na variavel valor

export default CampoTexto


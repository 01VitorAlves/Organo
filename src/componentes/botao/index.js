import './botao.css'

const Botao = (props)=> {
    return(
        <button className='botao'>
            {props.children}              
        </button>
    )
}

export default Botao



// pros indicava para pegar alguma propriedade passada, children é para utilizar elementos dentro da tag
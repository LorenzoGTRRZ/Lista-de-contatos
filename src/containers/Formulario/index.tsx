import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { MainContainer, BotaoSalvar, Informacao } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [categoria, setCategoria] = useState('')
  const [informacao, setInformação] = useState('')

  return (
    <MainContainer>
      <Informacao>Novo contato</Informacao>
      <Form>
        <Campo
          value={informacao}
          onChange={(evento) => setInformação(evento.target.value)}
          as="textarea"
          placeholder="Nome do contato"
        />
        <Campo as="textarea" placeholder="Numero do contato" />
        <Campo as="textarea" placeholder="email do contato" />
        <Opcoes>
          <p>Categoria</p>
          <input name="prioridade" type="radio" id="familia" />{' '}
          <label htmlFor="familia">familia</label>
          <input name="prioridade" type="radio" id="trabalho" />{' '}
          <label htmlFor="trabalho">trabalho</label>
          <input name="prioridade" type="radio" id="comum" />{' '}
          <label htmlFor="comum">comum</label>
          <input name="prioridade" type="radio" id="favorito" />{' '}
          <label htmlFor="favorito">favorito</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

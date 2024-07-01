import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, BotaoSalvar, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'
import * as enums from '../../utils/enums/Contato'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.COMUM)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        categoria,
        numero,
        email,
        informacao: undefined
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          as="textarea"
          placeholder="Nome do contato"
        />
        <Campo
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          as="textarea"
          placeholder="Numero do contato"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          as="textarea"
          placeholder="email do contato"
        />
        <Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((categoria) => (
            <div key={categoria}>
              <input
                value={categoria}
                name="Categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.COMUM}
              />{' '}
              <label htmlFor={categoria}>{categoria}</label>
            </div>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

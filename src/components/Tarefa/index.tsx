import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Contato'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contatos'

type Props = ContatoClass
const Contato = ({
  nome: nomeOriginal,
  categoria,
  email: emailOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      numeroOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setNumero(numeroOriginal)
    }
  }, [nomeOriginal, emailOriginal, numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <S.Nome
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Numero
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      />
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    numero,
                    categoria,
                    id: id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

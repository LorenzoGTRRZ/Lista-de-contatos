import { useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'

import * as enums from '../../utils/enums/Contato'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contatos'

type Props = ContatoClass
const Contato = ({ nome, categoria, email, numero, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome value={nome} />
      <S.Email value={email} />
      <S.Numero value={numero} />
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
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

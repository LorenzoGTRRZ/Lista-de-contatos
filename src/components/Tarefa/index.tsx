import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  categoria: string
  email: string
  numero: string
}

const Contato = ({ nome, categoria, email, numero }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Tag>{categoria}</S.Tag>
      <S.Nome value={nome} />
      <S.Email value={email} />
      <S.Numero value={numero} />
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
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

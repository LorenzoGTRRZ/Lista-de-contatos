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
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato

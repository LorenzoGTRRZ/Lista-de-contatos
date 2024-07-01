import FiltroCard from '../../components/FiltroCard'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="familia"
              />
              <FiltroCard
                valor={enums.Categoria.TRABALHO}
                criterio="categoria"
                legenda="trabalho"
              />
              <FiltroCard
                valor={enums.Categoria.COMUM}
                criterio="categoria"
                legenda="comum"
              />
              <FiltroCard
                valor={enums.Categoria.FAVORITO}
                criterio="categoria"
                legenda="favorito"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de contato</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral

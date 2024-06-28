import FiltroCard from '../../components/FiltroCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
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
      </div>
    </S.Aside>
  )
}

export default BarraLateral

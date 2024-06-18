import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="familia" contador={1} />
        <FiltroCard legenda="trabalho" contador={2} />
        <FiltroCard legenda="comum" contador={3} />
        <FiltroCard legenda="favorito" contador={4} />
        <FiltroCard ativo legenda="todes" contador={8} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral

import { useSelector } from 'react-redux'

import Contato from '../../components/Tarefa'
import { Container } from './styled'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <p>
        2 contatos marcados como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              categoria={t.categoria}
              nome={t.nome}
              email={t.email}
              numero={t.numero}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos

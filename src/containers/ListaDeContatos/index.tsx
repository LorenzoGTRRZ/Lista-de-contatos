import { useSelector } from 'react-redux'

import Contato from '../../components/Tarefa'
import { Container } from './styled'
import * as enums from '../../utils/enums/Contato'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 contatos marcados como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {contatos.map((t) => (
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

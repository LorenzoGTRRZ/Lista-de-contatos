import { useSelector } from 'react-redux'

import Contato from '../../components/Tarefa'
import { Container } from './styled'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>
        {filtraContatos().length} contatos marcados como: &quot;categoria&ldquo;
        e &quot;{termo}&ldquo;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraContatos().map((t) => (
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

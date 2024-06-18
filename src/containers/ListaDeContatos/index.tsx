import Contato from '../../components/Tarefa'
import { Container } from './styled'

const ListaDeContatos = () => (
  <Container>
    <p>2 contatos marcados como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos

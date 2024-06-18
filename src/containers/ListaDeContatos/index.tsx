import Contato from '../../components/Tarefa'
import { Container } from './styled'

const contatos = [
  {
    nome: 'Lorenzo Thiago Pereira Gutierrez',
    categoria: 'Familia',
    email: 'Lorenzoplaypereira@gmail.com',
    numero: '055996869492'
  },
  {
    nome: 'Eneli Gutierrez Silva',
    categoria: 'Favorito',
    email: 'rochinhaitaqui@gmail.com',
    numero: '055999347599'
  },
  {
    nome: 'Victor dos Santos Pereira',
    categoria: 'Trabalho',
    email: 'viro34@gmail.com',
    numero: '055996869442'
  },
  {
    nome: 'Andrews Mario Toledo',
    categoria: 'Comum',
    email: 'AndrewsMario@gmail.com',
    numero: '055996339492'
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>2 contatos marcados como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {contatos.map((t) => (
        <li key={t.nome}>
          <Contato
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

export default ListaDeContatos

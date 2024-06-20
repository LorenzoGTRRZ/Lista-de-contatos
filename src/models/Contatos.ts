import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  categoria: string
  numero: string
  email: string
  id: number

  constructor(
    nome: string,
    categoria: string,
    numero: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato

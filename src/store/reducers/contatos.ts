import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}
const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Lorenzo Thiago Pereira Gutierrez',
      categoria: enums.Categoria.FAVORITO,
      email: 'Lorenzoplaypereira@gmail.com',
      numero: '055996869492'
    },
    {
      id: 2,
      nome: 'Eneli Gutierrez Silva',
      categoria: enums.Categoria.FAMILIA,
      email: 'rochinhaitaqui@gmail.com',
      numero: '055999347599'
    },
    {
      id: 3,
      nome: 'Victor dos Santos Pereira',
      categoria: enums.Categoria.TRABALHO,
      email: 'viro34@gmail.com',
      numero: '055996869442'
    },
    {
      id: 4,
      nome: 'Andrews Mario Toledo',
      categoria: enums.Categoria.COMUM,
      email: 'AndrewsMario@gmail.com',
      numero: '055996339492'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
      /* contatoParaEditar = action.payload */
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer

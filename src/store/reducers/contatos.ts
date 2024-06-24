import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState: [
    new Contato(
      'Lorenzo Thiago Pereira Gutierrez',
      enums.Categoria.FAMILIA,
      'Lorenzoplaypereira@gmail.com',
      '055996869492',
      1
    ),
    new Contato(
      'Eneli Gutierrez Silva',
      enums.Categoria.FAMILIA,
      'rochinhaitaqui@gmail.com',
      '055999347599',
      2
    ),
    new Contato(
      'Victor dos Santos Pereira',
      enums.Categoria.FAMILIA,
      'viro34@gmail.com',
      '055996869442',
      3
    ),
    new Contato(
      'Andrews Mario Toledo',
      enums.Categoria.FAMILIA,
      'AndrewsMario@gmail.com',
      '055996339492',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState: [new Contato('')],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../components/Produto/styles'

interface FavoritosState {
  itens: (typeof Produto)[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar(state, action: PayloadAction<typeof Produto>) {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer

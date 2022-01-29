import {
  TypedUseSelectorHook,
  useDispatch as dispatch,
  useSelector as selector
} from 'react-redux'
import type { RootState, AppDispatch } from '../../App/app.store'

export const useDispatch = (): AppDispatch => dispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selector

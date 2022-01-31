import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { Typography, Button } from '@mui/material'

import { useDispatch } from '../commons/hooks'
import { setEndAt } from './Chrono.reducer'

import './end.scss'

function End() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setEndAt())
  })

  return (
    <div className="end-container">
      <Typography className="title">Bravo ! Vous avez fini !</Typography>
      <Button>
        <NavLink to="/stats">Voir les stats</NavLink>
      </Button>
    </div>
  )
}

export default End

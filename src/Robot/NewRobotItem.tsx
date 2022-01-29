import { Button } from '@mui/material'
import { useDispatch, useSelector } from '../commons/hooks'

import {
  createRobot,
  spendManufacturedElements
} from '../Inventory/Inventory.reducer'

function NewRobotItem() {
  const dispatch = useDispatch()

  const canCreateRobot = useSelector(
    state =>
      state.inventory.foobars.length >= 3 && state.inventory.foos.length >= 6
  )

  const handleClick = () => {
    dispatch(createRobot())
    dispatch(
      spendManufacturedElements([
        { type: 'foobars', count: 3 },
        { type: 'foos', count: 6 }
      ])
    )
  }

  return (
    <Button
      variant="contained"
      size="large"
      onClick={handleClick}
      disabled={!canCreateRobot}
    >
      Acheter un robot
    </Button>
  )
}

export default NewRobotItem

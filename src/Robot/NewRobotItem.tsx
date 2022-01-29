import { Button } from '@mui/material'
import { useDispatch, useSelector } from '../commons/hooks'

import { createRobot } from '../Inventory/Inventory.reducer'

function NewRobotItem() {
  const dispatch = useDispatch()

  const canCreateRobot = useSelector(
    state =>
      state.inventory.foobars.length > 3 && state.inventory.foos.length >= 6
  )

  const handleClick = () => {
    dispatch(createRobot())
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

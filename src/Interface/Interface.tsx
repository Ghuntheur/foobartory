import InventoryItem from '../Inventory/InventoryItem'
import Chrono from './Chrono'

import './interface.scss'

function Interface() {
  return (
    <div className="interface-container">
      <InventoryItem name="foos" />
      <InventoryItem name="bars" />
      <Chrono />
      <InventoryItem name="foobars" />
      <InventoryItem name="robots" />
    </div>
  )
}

export default Interface

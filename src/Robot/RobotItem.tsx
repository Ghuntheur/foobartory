import { useState } from 'react'
import { useDispatch } from '../commons/hooks'
import { Location } from '@models/index'

import { createManufacturedElement } from '../Inventory/Inventory.reducer'

import ActionButton from './ActionButton'
import { randomBetween } from 'src/commons/helpers'

interface RobotItemProps {
  uuid: string
  name: string
}

function RobotItem({ name, uuid }: RobotItemProps) {
  const [activity, setActivity] = useState(null)
  const [location, setLocation] = useState<Location>('home')

  const dispatch = useDispatch()

  const keepBusy = async (amount: number) => {
    return new Promise(resolve => setTimeout(resolve, amount * 1000))
  }

  const mineFoo = async () => {
    if (location !== 'fooFactory') {
      await keepBusy(5)
      setLocation('fooFactory')
    }

    await keepBusy(1)
    dispatch(createManufacturedElement({ type: 'foo', createdBy: uuid }))
  }

  const mineBar = async () => {
    if (location !== 'barFactory') {
      await keepBusy(0)
    }
    const productionTime = randomBetween(0.5, 2)
    await keepBusy(productionTime)

    dispatch(createManufacturedElement({ type: 'bar', createdBy: uuid }))
  }

  return (
    <div className="robot-item-container">
      <div className="identity">
        {location}
        <label htmlFor="name">Nom</label>
        <input name="name" value={name} placeholder="Bob"></input>
      </div>
      <div className="inventory"></div>
      <div className="activity">{activity}</div>
      <div className="actions">
        <ActionButton onClick={mineFoo}>Miner foo</ActionButton>
        <ActionButton onClick={mineBar}>Miner bar</ActionButton>
      </div>
      <div className="stats"></div>
    </div>
  )
}

export default RobotItem

import { useState } from 'react'
import { useDispatch } from '../commons/hooks'
import {
  Activity,
  Location,
  activityAccordingToLocation
} from '../commons/models'

import { createManufacturedElement } from '../Inventory/Inventory.reducer'

import ActionButton from './ActionButton'
import { randomBetween } from 'src/commons/helpers'

interface RobotItemProps {
  uuid: string
  name: string
}

function RobotItem({ name, uuid }: RobotItemProps) {
  const [activity, setActivity] = useState<Activity>('wait')
  const [location, setLocation] = useState<Location>('home')
  const [isWorking, setWorkingStatus] = useState(false)

  const dispatch = useDispatch()

  const work = async (type: Activity) => {
    setWorkingStatus(true)
    const newLocation = activityAccordingToLocation[type]

    if (location !== newLocation) {
      await keepBusy(5)
      setLocation(newLocation)
    }

    await processActivity(type)

    setWorkingStatus(false)
  }

  const processActivity = async (type: Activity) => {
    setActivity(type)

    switch (type) {
      case 'mineFoo':
        await mineFoo()
        break
      case 'mineBar':
        await mineBar()
        break
      case 'createFoobar':
        await createFoobar()
        break
    }

    setActivity('wait')
  }

  const keepBusy = async (amount: number) => {
    return new Promise(resolve => setTimeout(resolve, amount * 1000))
  }

  const mineFoo = async () => {
    await keepBusy(1)
    dispatch(createManufacturedElement({ type: 'foo', createdBy: uuid }))
  }

  const mineBar = async () => {
    const productionTime = randomBetween(0.5, 2)
    await keepBusy(productionTime)

    dispatch(createManufacturedElement({ type: 'bar', createdBy: uuid }))
  }

  const createFoobar = async () => {
    keepBusy(2)

    const success = Math.random() <= 0.6
    if (success) {
      dispatch(createManufacturedElement({ type: 'foobar', createdBy: uuid }))
    }
  }

  return (
    <div className="robot-item-container">
      <div className="identity">
        <label htmlFor="name">Nom</label>
        <input name="name" value={name} placeholder="Bob"></input>
      </div>
      <div className="inventory"></div>
      <div className="activity">{activity}</div>
      <div className="actions">
        <ActionButton onClick={() => work('mineFoo')} disabled={isWorking}>
          Miner foo
        </ActionButton>
        <ActionButton onClick={() => work('mineBar')} disabled={isWorking}>
          Miner bar
        </ActionButton>
      </div>
      <div className="stats"></div>
    </div>
  )
}

export default RobotItem

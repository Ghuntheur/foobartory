import { useState } from 'react'
import { useSelector, useDispatch } from '../commons/hooks'
import { Activity, Location, ISpendItem, WorkStatus } from '../commons/models'

import {
  activitiesDurations,
  activityAccordingToLocation,
  workStatusColor
} from '../commons/constants'

import {
  createManufacturedElement,
  spendManufacturedElements,
  addFoobarAttemptFailed
} from '../Inventory/Inventory.reducer'

import ActionButton from './ActionButton'
import RobotInventory from './RobotInventory'

import {
  Avatar,
  ButtonGroup,
  Card,
  CardContent,
  Chip,
  Typography
} from '@mui/material'

import './robot-item.scss'
import ActivityIcon from './ActivityIcon'

interface RobotItemProps {
  uuid: string
  name: string
}

function RobotItem({ name, uuid }: RobotItemProps) {
  const dispatch = useDispatch()

  const [activity, setActivity] = useState<Activity>('wait')
  const [location, setLocation] = useState<Location>('home')
  const [workStatus, setWorkStatus] = useState<WorkStatus | null>(null)

  const work = async (type: Activity) => {
    const newLocation = activityAccordingToLocation[type]
    setWorkStatus('inProgress')

    if (location !== newLocation) {
      await keepBusy('walking')
      setLocation(newLocation)
    }

    await keepBusy(type)
    await processActivity(type)
    setActivity('wait')
  }

  const processActivity = async (type: Activity) => {
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
  }

  const keepBusy = async (activity: Activity) => {
    setActivity(activity)
    const duration = activitiesDurations[activity]
    const amount = typeof duration === 'function' ? duration() : duration
    return new Promise(resolve => setTimeout(resolve, amount * 1000))
  }

  const mineFoo = async () => {
    dispatch(createManufacturedElement({ type: 'foos', createdBy: uuid }))
    setWorkStatus('success')
  }

  const mineBar = async () => {
    dispatch(createManufacturedElement({ type: 'bars', createdBy: uuid }))
    setWorkStatus('success')
  }

  const createFoobar = async () => {
    const success = Math.random() <= 0.6
    const elementsToSpend: ISpendItem[] = [{ type: 'foos', count: 1 }]

    dispatch(spendManufacturedElements(elementsToSpend))

    if (success) {
      setWorkStatus('success')
      dispatch(
        createManufacturedElement({
          type: 'foobars',
          createdBy: uuid
        })
      )

      dispatch(spendManufacturedElements([{ type: 'bars', count: 1 }]))
    } else {
      setWorkStatus('error')
      dispatch(addFoobarAttemptFailed({ robot: uuid }))
    }
  }

  const enoughtElementsToCreateFoobar = useSelector(state => {
    const foos = state.inventory.foos.length
    const bars = state.inventory.bars.length

    return foos > 0 && bars > 0
  })

  const formatLocation = (): string => {
    if (activity === 'walking') return '...'

    switch (location) {
      case 'barFactory':
        return 'Mine de bars'
      case 'fooFactory':
        return 'Mine de foos'
      case 'foobarFactory':
        return "Usine d'assemblage"
      case 'home':
      default:
        return 'Maison'
    }
  }

  const formatActivity = (): string => {
    switch (activity) {
      case 'walking':
        return 'En déplacement'
      case 'mineBar':
        return 'Minage de bar'
      case 'mineFoo':
        return 'Minage de foo'
      case 'createFoobar':
        return 'Assemblage de foobar'
      case 'wait':
      default:
        return 'Repos'
    }
  }

  const isWorking = workStatus === 'inProgress' || activity === 'walking'

  return (
    <Card
      variant="outlined"
      className="robot-item-container"
      sx={workStatus && { borderColor: workStatusColor[workStatus] }}
    >
      <CardContent className="robot-item">
        <div className="identity">
          <Typography variant="h4">{name}</Typography>
          <Avatar
            src={`https://robohash.org/${name}`}
            sx={{ width: '64px', height: '64px' }}
          />
        </div>
        <div className="activity">
          <Typography variant="subtitle2" className="activity-item">
            Localisation :<Chip label={formatLocation()} size="small" />
          </Typography>

          <ActivityIcon activity={activity} />

          <Typography variant="subtitle2" className="activity-item">
            Activité :<Chip label={formatActivity()} size="small" />
          </Typography>
        </div>
        <div className="actions">
          <ButtonGroup orientation="vertical">
            <ActionButton onClick={() => work('mineFoo')} disabled={isWorking}>
              Miner foo
            </ActionButton>
            <ActionButton onClick={() => work('mineBar')} disabled={isWorking}>
              Miner bar
            </ActionButton>
            <ActionButton
              onClick={() => work('createFoobar')}
              disabled={isWorking || !enoughtElementsToCreateFoobar}
            >
              Assembler foobar
            </ActionButton>
          </ButtonGroup>
        </div>
        <div className="inventory">
          <RobotInventory uuid={uuid} />
        </div>
      </CardContent>
    </Card>
  )
}

export default RobotItem

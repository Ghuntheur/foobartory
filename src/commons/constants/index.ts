import { WorkStatusColors } from './../models/index'
import { randomBetween } from '../helpers'

import { LocationActivity, ActivityDuration } from '../models/index'

export const activityAccordingToLocation: LocationActivity = {
  wait: 'home',
  mineFoo: 'fooFactory',
  mineBar: 'barFactory',
  createFoobar: 'foobarFactory',
  walking: 'home'
}
export const activitiesDurations: ActivityDuration = {
  wait: 0,
  walking: 5,
  mineFoo: 1,
  mineBar: () => randomBetween(0.5, 2),
  createFoobar: 2
}

export const workStatusColor: WorkStatusColors = {
  inProgress: 'info.main',
  error: 'error.main',
  success: 'success.main'
}

export const chartColors = [
  '#ef9a9a',
  '#d7ccc8',
  '#bbdefb',
  '#b2dfdb',
  '#ffccbc',
  '#fff9c4',
  '#dcedc8',
  '#ce93d8',
  '#f0f4c3',
  '#f48fb1'
]

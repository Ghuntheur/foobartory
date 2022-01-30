import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

import { useSelector } from '../commons/hooks'
import { Robot } from '../commons/models'
import { chartColors } from '../commons/constants'
import { hexToRgb } from '../commons/helpers'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

function RobotStats() {
  const robots: Robot[] = useSelector(state => state.inventory.robots)

  const chartData = {
    labels: ['foos', 'bars', 'foobars'],
    datasets: robots.map((robot, index) => {
      const color = hexToRgb(chartColors[index % chartColors.length])

      return {
        label: robot.name,
        data: [
          robot.inventory.foos,
          robot.inventory.bars,
          robot.inventory.foobars
        ],
        backgroundColor: `rgba(${color.join(', ')}, 0.3)`,
        borderColor: `rgba(${color.join(', ')}, 0.8)`,
        borderWidth: 1
      }
    })
  }

  return <Radar data={chartData} />
}

export default RobotStats

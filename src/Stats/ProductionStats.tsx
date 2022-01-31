import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { chartColors } from '../commons/constants'
import { hexToRgb } from '../commons/helpers'

import { useSelector } from '../commons/hooks'

ChartJS.register(ArcElement, Tooltip, Legend)

function ProductionsStats() {
  const foos = useSelector(
    state => state.inventory.foos.length + state.inventory.garbage.foos.length
  )
  const bars = useSelector(
    state => state.inventory.bars.length + state.inventory.garbage.bars.length
  )
  const foobars = useSelector(
    state =>
      state.inventory.foobars.length + state.inventory.garbage.foobars.length
  )

  const data = {
    labels: ['foos', 'bars', 'foobars'],
    datasets: [
      {
        label: 'Production',
        data: [foos, bars, foobars],
        backgroundColor: [
          `rgba(${hexToRgb(chartColors[0]).join(', ')}, 0.3)`,
          `rgba(${hexToRgb(chartColors[2]).join(', ')}, 0.3)`,
          `rgba(${hexToRgb(chartColors[4]).join(', ')}, 0.3)`
        ]
      }
    ]
  }

  return <Pie data={data} />
}

export default ProductionsStats

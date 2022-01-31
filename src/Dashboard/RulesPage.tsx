import { Typography } from '@mui/material'

import './rules.scss'

function RulesPage() {
  return (
    <div className="rules-container">
      <Typography variant="body1">
        Les robots sont chacun capables d'effectuer plusieurs actions :
      </Typography>
      <Typography variant="body1">
        - Se déplacer pour changer d'activité : occupe le robot pendant 5
        secondes.
      </Typography>
      <Typography variant="body1">
        - Miner du foo : occupe le robot pendant 1 seconde.
      </Typography>
      <Typography variant="body1">
        - Miner du bar : occupe le robot pendant un temps aléatoire compris
        entre 0.5 et 2 secondes.
      </Typography>
      <Typography variant="body1">
        - Assembler un foobar à partir d'un foo et d'un bar : occupe le robot
        pendant 2 secondes. L'opération a 60% de chances de succès ; en cas
        d'échec le bar peut être réutilisé, le foo est perdu.
      </Typography>
      <Typography variant="body1">
        - Acheter un nouveau robot pour 3 foobar et 6 Foobartory Front foo , 0s.
      </Typography>
      <Typography variant="body1">
        La simulation se termine quand on a 20 robots.
      </Typography>
    </div>
  )
}

export default RulesPage

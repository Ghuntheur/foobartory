import RobotsList from '../Robot/RobotsList'
import Chrono from '../Interface/Chrono'
import Interface from '../Interface/Interface'

function App() {
  return (
    <div>
      <aside className="sidebar-container">A gauche</aside>
      <main className="main-container">
        <Interface />
        <Chrono />

        <RobotsList />
      </main>
    </div>
  )
}

export default App

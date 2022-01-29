import RobotsList from '../Robot/RobotsList'
import Chrono from '../Interface/Chrono'

function App() {
  return (
    <div>
      <aside className="sidebar-container">A gauche</aside>
      <main className="main-container">
        <Chrono />

        <RobotsList />
      </main>
    </div>
  )
}

export default App

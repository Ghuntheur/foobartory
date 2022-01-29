import RobotsList from '../Robot/RobotsList'
import Interface from '../Interface/Interface'

function App() {
  return (
    <div>
      <aside className="sidebar-container">A gauche</aside>
      <main className="main-container">
        <Interface />

        <RobotsList />
      </main>
    </div>
  )
}

export default App

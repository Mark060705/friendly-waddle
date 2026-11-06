import './App.css'
import Tablazat from './components/Tablazat'
import { useTablazatContext } from './contexts/TablazatContext'

function App() {
    const { konyvek } = useTablazatContext();;

  return (
    <>
      <div>
        <h1>Könyvtár</h1>
        <Tablazat konyvek={konyvek} />
      </div>
    </>
  )
}

export default App

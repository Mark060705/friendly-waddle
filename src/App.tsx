import { useState } from 'react'
import './App.css'
import KonyvTabla from './components/Tablazat'
import Urlap from './components/Urlap'

function App() {
  const [urlapLathato, setUrlapLathato] = useState(false)

  return (
    <main>
      <h1>Könyvtár</h1>
      <button
        type="button"
        onClick={() => setUrlapLathato((elozoAllapot) => !elozoAllapot)}
        aria-controls="konyvtar-nezet"
        aria-pressed={urlapLathato}
      >
        {urlapLathato ? 'Vissza a könyvekhez' : 'Új könyv hozzáadása'}
      </button>
      <div id="konyvtar-nezet">
        {urlapLathato ? <Urlap /> : <KonyvTabla />}
      </div>
    </main>
  )
}

export default App

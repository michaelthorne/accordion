import React from 'react'
import Accordion from './components/Accordion/Accordion'
import './App.css'

function App() {
  return (
    <main className="App">
      <div className="App-nav">

      </div>
      <div className="App-body">
        <div className="App-body__main">

        </div>
        <div className="App-body__aside">
          <Accordion />
        </div>
      </div>
    </main>
  )
}

export default App

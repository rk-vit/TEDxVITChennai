import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import WelcomeText from './pages/landingPage'

function App() {
    return(
      <div>
        <Header/>
        <WelcomeText/>
      </div>
    )
  
}

export default App

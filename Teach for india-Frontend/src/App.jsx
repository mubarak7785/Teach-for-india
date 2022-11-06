import { useState } from 'react'
import { Navbar } from "./Navbar/Navbar"
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import { Register } from './Register/Register'
import { Administrator } from './Administrator/Administrator'

function App() {
 

  return (
    <div className="App">
     <Routes>
    <Route path='/' element={<Register/>}/>
      <Route path='/administrator' element={<Administrator/>}/>
     </Routes>
    </div>
  )
}

export default App

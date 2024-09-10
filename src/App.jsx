import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableFirst from './TableOne'
import Farm from './FormTwo'
import UpdateTable from './updateTable'
              
import { Routes,Route } from 'react-router-dom'

 
function App() {
  return(
   <div> 
    <Routes>
    <Route path="/" element={<TableFirst/>}></Route>
    <Route path="/Farm" element={<Farm />}></Route> 
    <Route path="/UpdateTable" element={<UpdateTable/>}></Route>
    </Routes>
    </div>
  );
}

export default App

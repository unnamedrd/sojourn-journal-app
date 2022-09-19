import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import data from '../public/data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
  
        location={item.location}
        title={item.title}
        date={item.start_date, item.end_date}
        description = {item.description}
        
      />
   )
  })
  

  return (
    <div className="App">
      <h2>My Trips</h2>
    </div>
  )
}

export default App

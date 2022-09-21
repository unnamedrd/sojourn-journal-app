import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import data from '../public/data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        img={item.image}
        location={item.location}
        title={item.title}
        startDate={item.start_date}
        endDate = {item.end_date}
        description = {item.description}
        
      />
   )
  })
  

  return (
    <div className="App">
      <h2>My Trips</h2>
      {cards}
    </div>
  )
}

export default App

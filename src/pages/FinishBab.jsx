import React from 'react'
import BabNavbar from '../components/BabNavbar'
import dummy from '../db/finishdata.json'
import FinishBox from '../components/FinishBox'

function FinishBab() {
  return (
    <div>
        <BabNavbar />
        {dummy.map(event => (
            <FinishBox key={event.id} event={event} />
        ))}
        
    </div>
  )
}

export default FinishBab

import React from 'react'
import BabNavbar from '../components/BabNavbar'
import dummy from '../db/waitdata.json'
import WaitBox from '../components/WaitBox'

function ConfirmBab() {
  return (
    <div>
        <BabNavbar />
        {dummy.map(event => (
            <WaitBox key={event.id} event={event} />
        ))}
    </div>
  )
}

export default ConfirmBab

import React from 'react'
import BabNavbar from '../components/BabNavbar'
import dummy from '../db/confirmdata.json'
import ConfirmBox from '../components/ConfirmBox'

function ConfirmBab() {
  return (
    <div>
        <BabNavbar />
        {dummy.map(event => (
            <ConfirmBox key={event.id} event={event} />
        ))}
    </div>
  )
}

export default ConfirmBab

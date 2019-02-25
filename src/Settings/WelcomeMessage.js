import React from 'react'
import { AppContext } from '../App/AppProvider';

function WelcomeMessage({firstVisit}) {
  return (
    <AppContext.Consumer>
    {({firstVisit}) =>
      firstVisit ? <div>
        Welcome to CryptosList, select your favorite cryptos to get started.{' '}
      </div> : null
    }
    </AppContext.Consumer>
  )
}

export default WelcomeMessage;

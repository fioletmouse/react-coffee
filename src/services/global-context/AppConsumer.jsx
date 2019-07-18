import React from 'react'
import AppContext from './AppContext '

const AppConsumer = () => {
    return (
        <AppContext.Consumer> 
          {(context) => context}
        </AppContext.Consumer>
    )
}
export default  AppConsumer;
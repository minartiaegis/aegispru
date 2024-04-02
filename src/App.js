import React from 'react'
import Routing from './Routing'
import { ScrollToTop } from './ScrollToTop'

export const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Routing />
    </div>
  )
}

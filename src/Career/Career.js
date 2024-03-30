import React from 'react'
import { Headers } from '../Global/Headers/Headers'
import { Footers } from '../Global/Footers/Footers'
import { ContentCareer } from './ContentCareerr/ContentCareer'
import { TertarikBergabung } from './TertarikBergabung/TertarikBergabung'

export const Career = () => {
  return (
    <div id="container1">
        <Headers />

        <ContentCareer />
        <TertarikBergabung />
        
        <Footers />
    </div>

  )
}
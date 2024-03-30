import React from 'react'
import { Headers } from '../Global/Headers/Headers'
import { Profile } from './Profile/Profile'
import { JenisAsuransi } from './JenisAsuransi/JenisAsuransi'
import { Footers } from '../Global/Footers/Footers'
import { VisiMisi } from './VisiMisi/VisiMisi'
import { Contact } from './Contact/Contact'

export const Home = () => {
  return (
    <div id="container1">
        <Headers />
        <Profile /> 
        <JenisAsuransi />
        <VisiMisi />
        <Contact />
        <Footers />
    </div>

  )
}

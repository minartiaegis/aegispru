import React, {useState} from 'react'
import { Headers } from '../Global/Headers/Headers'
import { Footers } from '../Global/Footers/Footers'
import whatsappLogo from '../assets/icon/Whatsapp2.png'
import emailLogo from '../assets/icon/Email.png'
import MyForm from './Form/form'

export const ContactUs = () => {
  return (
    <div>
        <Headers />

        <div style={{marginTop: '5vh', marginBottom: '5vh'}}>
            <p style={{textAlign: 'center', fontSize: 32, fontWeight: 700, height: '10vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>Punya Pertanyaan Lebih Lanjut?</p>

            {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <div style={{backgroundColor: 'red'}}>
                    <img src={emailLogo} alt='Logo Email' />
                </div>
                <div style={{backgroundColor: 'red'}}>
                    <img src={whatsappLogo} alt='Logo Whatsapp' />
                </div>
            </div> */}
            <MyForm />
            
            
        </div>
        
        <Footers />
    </div>
  )
}

import React from 'react'

import pruventureLogo from '../../assets/icon/pv_orig.png'
import { useNavigate } from 'react-router-dom';

export const TertarikBergabung = () => {

    const navigate = useNavigate()

    const handleContactClick = () => {
        // Use navigate to go to the home route
        navigate('/contactus');
    };

  return (
    <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(255, 0, 0, 0.3)',  paddingTop: '5vh', paddingBottom: '5vh', paddingLeft: '10vw', paddingRight: '10vw'}}>
        <div style={{flex: 0.3}}>
            <div style={{flex: 1}}>
                <img style={{width: 300, height: 100}} src={pruventureLogo} alt='pruventure-logo' />
            </div>
        </div>
        

        <div style={{display: 'flex', flexDirection: 'row', flex: 0.7, justifyContent: 'flex-end'}}>
            <div style={{flex: 0.3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <p style={{fontWeight: 700, fontSize: 24}}>Tertarik Bergabung?</p>
            </div>
            
            <div style={{flex: 0.4, display: 'flex', justifyContent: 'flex-start', paddingLeft: '3vw', alignItems: 'center'}}>
                <button id='cursor' onClick={handleContactClick} style={{width: 300, height: 75, borderRadius: 8, borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
                    <p style={{fontSize: 18, fontWeight: 700, color: 'rgba(0, 0, 0, 0.8)'}}>Hubungi Kami</p>
                </button>
            </div>  
        </div>

    </div>
  )
}

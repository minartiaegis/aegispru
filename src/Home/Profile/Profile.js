import React from 'react'

import './Profile.css'

import iprofile from '../../assets/extras/minarti.jpeg'
// import whatsappLogo from '../../assets/icon/whatsapp.png'
import tiktokLogo from '../../assets/icon/tiktok.png'
import instagramLogo from '../../assets/icon/instagram.png'

export const Profile = () => {
  const onCheck = () => {
    console.log('success')
  }

  const handleButtonClick = (url) => {
    // You can use window.location.href or React Router to navigate to the specified URL
    window.location.href = url;
  };

  return (
      <div className='content1'>
        <div className='contProfile'>
            <div className='contentProf'>
                <img src={iprofile} className='iprofile' alt='gojo'/>
            </div>

            <div className='nama'>
                <h5 className='minarti'>Minarti</h5> 
                <h5 className='jobTitle'>FINANCIAL ADVISOR</h5>
                {/* <p className='email'>( minartichen@gmail.com )</p> */}
            </div>

            <div style={{marginTop: 10}}>
              {/* <button style={{backgroundColor: 'transparent', borderWidth: 0}} onClick={() => handleButtonClick('https://wa.me/your-whatsapp-number')}>
                <img style={{width: 40, height: 40}} src={whatsappLogo} alt="WhatsApp" />
              </button> */}

              <button id='cursor' style={{backgroundColor: 'transparent', borderWidth: 0, marginRight: '1vw'}} onClick={() => handleButtonClick('https://www.tiktok.com/@minarti_aegis?_t=8htPQ5YBJ6V&_r=1')}>
                <img style={{width: 40, height: 40}} src={tiktokLogo} alt="TikTok" />
              </button>

              <button id='cursor' style={{backgroundColor: 'transparent', borderWidth: 0, marginLeft: '1vw'}} onClick={() => handleButtonClick('https://www.instagram.com/minarti_aegis?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr')}>
                <img style={{width: 40, height: 40, color: 'white'}} src={instagramLogo} alt="Instagram" />
              </button>
            </div>
        </div>

        {/* <div className='detailCont'>
          <button className='detailButton' id='cursor' onClick={onCheck}>
            <h5 className='textDetail'>More Detail</h5>
          </button>
        </div> */}
      </div>
  )
}

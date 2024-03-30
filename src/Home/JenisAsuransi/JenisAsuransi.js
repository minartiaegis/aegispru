import React from 'react'

import '../JenisAsuransi/JenisAsuransi.css'
import { useNavigate } from 'react-router-dom'

export const JenisAsuransi = () => {
    const navigate = useNavigate()

    const handleAsuransiJiwa = () => {
        navigate('/asuransijiwa')
    }

    const handleAsuransiKritis = () => {
        navigate('/asuransikritis')
    }

    const handleAsuransiKesehatan = () => {
        navigate('/asuransikesehatan')
    }
  
    return (
    <div>
        <div className="line-with-text">
            <div className="line"></div>
            <span className="judulContentJenis">APA YANG ANDA BUTUHKAN ?</span>
            <div className="line"></div>
        </div>
        <div className='flexCont'>
            <div className='asJiwa'>
                <button id='cursor' className='btn' onClick={handleAsuransiJiwa}>
                    <h2 className='asJiwaText'>Asuransi Jiwa</h2>
                </button>    
            </div>

            <div className='asKritis'>
                <button id='cursor' className='btn' onClick={handleAsuransiKritis}>
                    <h2 className='asKritisText'>Asuransi Kritis</h2>
                </button>
            </div>
            
            <div className='asKesehatan'>
                <button id='cursor' className='btn' onClick={handleAsuransiKesehatan}>
                    <h2 className='asKesehatanText'>Asuransi Kesehatan</h2>
                </button> 
            </div>
        </div>
    </div>

  )
}

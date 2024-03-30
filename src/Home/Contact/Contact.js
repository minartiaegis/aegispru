import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const navigate = useNavigate()

    const handleContactClick = () => {
        // Use navigate to go to the home route
        navigate('/contactus');
    };
  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '5vw', paddingRight: '5vw', paddingTop: '7vh', paddingBottom: '7vh', backgroundColor: 'rgba(255,0,0,0.25)'}}>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{fontSize: 28, fontWeight: 700, textAlign: 'center'}}>Punya Pertanyaan Lebih Lanjut ?</p>
            </div>

            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <button onClick={handleContactClick} id='cursor' style={{fontSize: 20, width: '20vw', height: '10vh', borderWidth: 1, borderRadius: 8, backgroundColor: 'rgba(255,0,0,0.2)', color: 'rgba(0, 0, 0, 0.8)'}}>
                    <p style={{fontWeight: 700}}>Hubungi Kami</p>
                </button>
            </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '5vw', paddingRight: '5vw', paddingTop: '1vh', paddingBottom: '1vh', backgroundColor: 'rgba(255,0,0,0.25)'}}>
            <div style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, padding: 15}}>
                <p style={{fontSize: 12}}>Website ini merupakan website pribadi, <b>BUKAN</b> bagian resmi dari <b>PT. Prudential Life Assurance</b>. Informasi pada website ini diambil dari sumber-sumber resmi perusahaan. Tujuan website ini adalah untuk memberikan gambaran terkait asuransi. Jika terdapat perbedaan informasi antara website ini dan sumber resminya, maka yang benar adalah sumber resmi perusahaan. User harus membaca dengan teliti semua ketentuan, persyaratan, serta kondisi yang tercantum dalam polis.</p>
            </div>
        </div>
    </div>
  )
}

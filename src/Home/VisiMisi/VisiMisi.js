import React from 'react'

export const VisiMisi = () => {
  
    return (
    <div style={{marginBottom: '10vh'}}>
        <div style={{marginTop: '10vh'}}>
            <div className="line-with-text">
                <div className="line"></div>
                <span className="judulContentJenis">VISI</span>
                <div className="line"></div>
            </div>
            <div style={{marginLeft: '10vw', marginRight: '10vw', display: 'flex', justifyContent: 'center'}}>
                <p style={{fontSize: 24, textAlign: 'center'}}>Kami bertujuan untuk memberikan jaminan, pendidikan, dan pertumbuhan sekaligus memastikan keselamatan Anda dan menjunjung integritas.</p>
            </div>
        </div>

        <div style={{marginTop: '10vh'}}>
            <div className="line-with-text">
                <div className="line"></div>
                <span className="judulContentJenis">MISI</span>
                <div className="line"></div>
            </div>
            <div style={{marginLeft: '10vw', marginRight: '10vw'}}>
                <p style={{fontSize: 24, textAlign: 'center'}}>Memberikan edukasi terkait pentingnya manfaat asuransi bagi keluarga</p>
                <p style={{fontSize: 24, textAlign: 'center', marginTop: '4vh'}}>Membantu bagaimana merencanakan dan memberikan perlindungan keuangan keluarga jangka panjang</p>
                <p style={{fontSize: 24, textAlign: 'center', marginTop: '4vh'}}>Memberikan layanan jaminan (asuransi) dengan menjaga integritas pelanggan dan memberikan ketenangan pikiran kepada klien kami</p>
                <p style={{fontSize: 24, textAlign: 'center', marginTop: '4vh'}}>Membangun dan mengembangkan tim/mitra usaha yang berkomitmen membantu melindungi keuangan keluarga Indonesia</p>
                <p style={{fontSize: 24, textAlign: 'center', marginTop: '4vh'}}>Membantu bagaimana melindungi aset keluarga terhadap risiko di kemudian hari</p>
            </div>
        </div>

    </div>

  )
}
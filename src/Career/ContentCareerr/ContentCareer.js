import React from 'react'

export const ContentCareer = () => {
  return (
    <div style={{paddingLeft: '10vw', paddingRight: '10vw', marginTop: '5vh', marginBottom: '5vh'}}>
        <p style={{fontWeight: 700, fontSize: 48, marginBottom: '3vh'}}>PRUVenture Program</p>

        <div>
            <p style={{fontSize: 25}}><b>Kriteria :</b></p>
            <ol>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Usia: 21- 40 tahun</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Pendidikan : Min. D3</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Pengalaman Kerja: Min. 1 tahun</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Rata-Rata Penghasilan: Min. IDR 6 Juta/bulan</li>
            </ol>
        </div>

        <div style={{marginTop: '3vh'}}>
            <p style={{fontSize: 25}}><b>Dokumen yang diperlukan :</b></p>
            <ol>
                <li style={{fontSize: 18, paddingTop: '7px'}}>CV (Curriculum Vitae)</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>KTP</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Ijazah</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Slip gaji (gross): 3 bulan terakhir</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Foto terakhir setengah badan, wajah terlihat jelas, dan tidak menggunakan masker</li>
            </ol>
        </div>

        <div style={{marginTop: '3vh'}}>
            <p style={{fontSize: 25}}><b>Benefit :</b></p>
            <ol>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Flexible time</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Kesempatan travelling</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Flexible allowance</li>
                <li style={{fontSize: 18, paddingTop: '7px'}}>Advanced knowledge</li>
            </ol>
        </div>

    </div>
  )
}

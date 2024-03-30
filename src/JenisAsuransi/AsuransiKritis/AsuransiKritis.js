import React from 'react'

import './AsuransiKritis.css'
import { Headers } from '../../Global/Headers/Headers'
import { Footers } from '../../Global/Footers/Footers'

import asKritis from '../../assets/extras/asuransikritis.jpg'
import { useNavigate } from 'react-router-dom'

export const AsuransiKritis = () => {
    const navigate = useNavigate()

    const goToPCB88 = () => {
        navigate('/pcb88')
    }
    const goToPkks = () => {
        navigate('/pkks')
    }

  return (
    <div className='bgCont'>
        <Headers />
        <div className='contentASJ1'>
            <div>
                <img className='picAsJiwa' src={asKritis} alt='none' />
            </div>
            <div className='contentASJ1-2'>
                <h1 className='titleAsJi'>Asuransi Kritis</h1>
                <p className='pAsJi'>Asuransi Kritis adalah jenis asuransi yang dirancang untuk memberikan perlindungan finansial kepada pemegang polis jika mereka didiagnosis menderita penyakit serius yang tercakup dalam polis asuransi. Ini berbeda dengan asuransi kesehatan konvensional yang umumnya hanya menutupi biaya medis harian, karena asuransi kritis memberikan pembayaran lump sum (sejumlah uang tunai) jika Anda didiagnosis dengan salah satu penyakit yang tercakup dalam polis. Penyakit kritis yang paling umum dicakup meliputi kanker, serangan jantung, stroke, gagal ginjal, penyakit Alzheimer, dan sejumlah kondisi medis serius lainnya.</p>
            </div>
        </div>

        <div className='contentASJ2'>
            <h2 className='subTitleASJ'>Mengapa Asuransi Kritis Penting?</h2>
            <p className='pAsJi' style={{marginBottom: 10}}>
                Asuransi Kritis memberikan perlindungan finansial kepada keluarga Anda dalam berbagai cara :
            </p>

            <ul>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20, marginTop: 15}}><strong className='str1'>Perlindungan Finansial</strong> <br/>Asuransi kritis memberikan perlindungan finansial yang sangat dibutuhkan jika Anda didiagnosis menderita penyakit serius. Uang tunai yang diberikan oleh asuransi ini dapat membantu Anda menutupi biaya pengobatan, perawatan jangka panjang, atau bahkan membayar utang medis yang mungkin timbul akibat penyakit tersebut.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Mengurangi Beban Keuangan</strong><br/> Diagnosa penyakit kritis sering kali menyebabkan beban keuangan yang signifikan. Biaya pengobatan, obat-obatan, perawatan jangka panjang, dan bahkan kehilangan pendapatan karena tidak bisa bekerja dapat memberikan tekanan finansial yang besar. Asuransi kritis membantu mengurangi beban ini.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Pilihan Perawatan Lebih Baik</strong> <br/> Dengan uang tunai dari klaim asuransi kritis, Anda dapat memilih perawatan yang terbaik tanpa harus khawatir tentang biaya. Ini dapat membantu Anda mendapatkan perawatan medis terbaik yang mungkin meningkatkan peluang pemulihan.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Kualitas Hidup</strong> <br/> Asuransi kritis tidak hanya memberikan perlindungan finansial, tetapi juga dapat meningkatkan kualitas hidup Anda dan keluarga Anda selama masa yang sulit. Anda dapat menghindari menguras tabungan atau menjual aset berharga untuk membayar biaya medis.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Pilihan Keuangan</strong> <br/> Asuransi kritis memberikan fleksibilitas dalam pengeluaran uang tunai sesuai dengan kebutuhan Anda. Anda bisa menggunakan uang tersebut untuk membayar tagihan medis, mengganti pendapatan yang hilang, atau memenuhi keperluan lain sesuai kebutuhan.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Penting untuk Semua Usia</strong> <br/> Asuransi kritis tidak hanya penting untuk orang tua atau mereka yang berisiko tinggi. Penyakit serius dapat mempengaruhi siapa saja, termasuk orang muda. Dengan asuransi kritis, Anda melindungi diri Anda dari ketidakpastian masa depan.</li></ul>
        </div>

        <div>
            <div className="line-with-text">
                <div className="line"></div>
                <span className="judulContentJenis">PRODUK KONVENSIONAL</span>
                <div className="line"></div>
            </div>

            <div>
                <div class="produkCont">
                    {/* <div /> */}
                    <button id='cursor' onClick={goToPCB88} class="item1">PRUCritical Benefit 88</button>
                </div>
            </div>

            <div className="line-with-text">
                <div className="line"></div>
                <span className="judulContentJenis">PRODUK SYARIAH</span>
                <div className="line"></div>
            </div>

            <div>
                <div class="produkCont">
                    {/* <div /> */}
                    <button id='cursor' onClick={goToPkks} class="item1">PRUSolusi Kondisi Kritis Syariah</button>
                </div>
            </div>
        </div>

        <Footers />
    </div>
  )
}

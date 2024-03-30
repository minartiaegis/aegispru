import React from 'react'

import './AsuransiKesehatan.css'
import { Headers } from '../../Global/Headers/Headers'
import { Footers } from '../../Global/Footers/Footers'

import asKesehatan from '../../assets/extras/asuransikesehatan.jpeg'
import { useNavigate } from 'react-router-dom'

export const AsuransiKesehatan = () => {
    const navigate = useNavigate()

    const goToPphPro = () => {
        navigate('/pphpro')
    }
    const goToPphSyariahPro = () => {
        navigate('/pphprosyariah')
    }
    const goToPssPro = () => {
        navigate('/psspro')
    }
    const goToPssSyariahPro = () => {
        navigate('/pssprosyariah')
    }
  return (
    <div className='bgCont'>
        <Headers />
        <div className='contentASJ1'>
            <div>
                <img className='picAsJiwa' src={asKesehatan} alt='none' />
            </div>
            <div className='contentASJ1-2'>
                <h1 className='titleAsJi'>Asuransi Kesehatan</h1>
                <p className='pAsJi'>
Asuransi kesehatan adalah bentuk asuransi yang dirancang untuk membantu melindungi Anda dan keluarga Anda dari risiko finansial yang timbul akibat biaya perawatan kesehatan. Ini berfungsi dengan cara Anda membayar premi secara teratur kepada perusahaan asuransi, dan dalam pertukaran, perusahaan asuransi akan membantu menutupi sebagian atau seluruh biaya perawatan kesehatan Anda sesuai dengan syarat dan ketentuan dalam polis asuransi.</p>
            </div>
        </div>

        <div className='contentASJ2'>
            <h2 className='subTitleASJ'>Mengapa Asuransi Kesehatan Penting?</h2>
            <p className='pAsJi' style={{marginBottom: 10}}>
                Asuransi Kesehatan memberikan perlindungan finansial kepada keluarga Anda dalam berbagai cara :
            </p>

            <ul>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20, marginTop: 15}}><strong className='str1'>Premi</strong> <br/>Asuransi kesehatan penting karena premi yang Anda bayarkan dapat memberikan perlindungan finansial yang besar jika Anda atau anggota keluarga Anda membutuhkan perawatan medis yang mahal. Ini membantu mencegah Anda mengalami kerugian finansial yang berat akibat biaya perawatan yang tak terduga.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Cakupan</strong><br/>  Asuransi kesehatan memberikan akses ke perawatan medis yang Anda butuhkan tanpa khawatir tentang biaya yang tinggi. Ini sangat penting karena bisa menjadi penentu keselamatan dan kualitas hidup Anda atau keluarga Anda.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Pemilihan Jaringan</strong> <br/> Menggunakan penyedia dalam jaringan dapat menghemat uang dan memastikan Anda mendapatkan perawatan yang direkomendasikan oleh perusahaan asuransi. Ini penting untuk menghindari biaya tambahan yang mungkin muncul jika Anda menggunakan penyedia luar jaringan.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Deductible</strong> <br/> Meskipun deductible merupakan uang muka yang harus Anda bayarkan, memiliki deductible yang wajar dapat membantu Anda mengontrol premi bulanan Anda. Ini juga dapat mendorong Anda untuk berpikir lebih bijak tentang penggunaan perawatan medis.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Koin-Asuransi (Co-Insurance)</strong> <br/> Koin-asuransi memungkinkan Anda berbagi biaya perawatan dengan perusahaan asuransi, yang berarti Anda tidak harus menanggung seluruh beban sendirian. Hal ini membuat perawatan medis lebih terjangkau.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Batas Maksimum Tertanggung (Out-of-Pocket Maximum)</strong> <br/> Batas maksimum tertanggung adalah perlindungan finansial tertinggi yang bisa Anda dapatkan. Ini membantu melindungi Anda dari risiko keuangan yang tidak terkendali jika Anda mengalami penyakit atau cedera yang serius.</li>
                <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Manfaat Tambahan</strong> <br/> Manfaat tambahan seperti cakupan internasional atau perawatan kesehatan alternatif dapat memberikan fleksibilitas dan perlindungan ekstra sesuai dengan kebutuhan Anda. Mereka dapat membantu Anda mendapatkan perawatan di luar negeri atau mencoba metode perawatan alternatif jika diinginkan.</li>
                </ul>
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
                    <button onClick={goToPphPro} id='cursor' class="item1">PRUPrime Healthcare Plus Pro</button>
                    <button onClick={goToPssPro} id='cursor' class="item1">PRUSolusi Sehat Plus Pro</button>
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
                    <button onClick={goToPphSyariahPro} id='cursor' class="item1">PRUPrime Healthcare Plus Pro Syariah</button>
                    <button onClick={goToPssSyariahPro} id='cursor' class="item1">PRUSolusi Sehat Plus Pro Syariah</button>
                </div>
            </div>
        </div>

        <Footers />
    </div>
  )
}

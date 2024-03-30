import React from 'react'

import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/prucinta.jpg'
import { useNavigate } from 'react-router-dom'

export const Pcb88 = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransikritis')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Brochure-PRUCinta-230811.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Product-Summary-PRUCinta-230911.pdf';
        window.open(fileUrl);
      };

  return (
    <div>
        <Headers />
            <div className='backContPLNG'>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                  <button id='cursor' className='backButton' onClick={handleBackButton}>&lt;&lt; Back | Asuransi Kritis</button>  
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                    <h2 style={{fontSize: 52, color: 'red'}}>PRUCritical Benefit 88</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <img style={{alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudentialsyariah.co.id/id/life/prucinta/</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>PRUCritical Benefit 88 merupakan produk asuransi yang memberikan perlindungan komprehensif atas 60 kondisi kritis atau meninggal dunia hingga usia 88 tahun serta perawatan Angioplasti dimana akan dibayarkan 10% maksimal 200 juta dari Uang Pertanggungan ketika Tertanggung menjalani perawatan Angioplasti tanpa mengurangi manfaat PRUCritical Benefit 88.</p>
                    
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
                        <h2 style={{color: 'red', fontSize: 20}}>Informasi Selengkapnya : </h2>
                        <button id='cursor' onClick={downloadFile} style={{backgroundColor: 'transparent', borderStyle: 'none'}}>
                            <h2 style={{fontSize: 20, fontWeight: 800, color: 'red'}}><u>Disini</u></h2>
                        </button>   
                    </div>  
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                    <h2 style={{fontSize: 30, color: 'red', fontWeight: 700}}>Detail Product</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1, backgroundColor: 'red', borderRadius: 18}}>
                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 0.4}}>
                            <p style={{color: 'white', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Fitur Product</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Mata Uang</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Rupiah</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Premi/Kontribusi bulanan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Rp300.000/bulan atau Rp3.300.000/tahun</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Tertanggung/Peserta</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 hari (Ulang Tahun Sebenarnya) - 60 tahun (Ulang Tahun Berikutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Perlindungan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>20 tahun</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            {/* Here */}

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1, backgroundColor: 'white', borderRadius: 18, borderWidth: 4, borderColor: 'red', borderStyle: 'solid'}}>
                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 0.4}}>
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Manfaat</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <ul>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 7, paddingBottom: 7}}>Manfaat Meninggal Dunia: 100% Santunan ASuransi atas beban Dana <i><b>Tabarru'</b></i> dan Nilai Tunai* atas beban Dana Nilai Tunai** setelah pengajuan klaim Manfaat Asuransi disetujui oleh Pengelola akan dibayarkan apabila terjadi risiko meninggal dunia atas diri Peserta Yang Diasuransikan sesuai dengan yang tercantum di dalam Polis, dan Polis akan berakhir.</li>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 7, paddingBottom: 7}}>Manfaat Meninggal Dunia karena Kecelakaan***: Total 300% dari Santunan Asuransi atas beban Dana <i><b>Tabarru'</b></i> dan Nilai Tunai* atas beban Dana Nilai Tunai** akan dibayarkan jika Peserta Yang Diasuransikan meninggal dunia sebelum usia 70 tahun karena kecelakaan dengan mengikuti ketentuan yang tercantum di dalam Polis, dan Polis akan berakhir.</li>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 7, paddingBottom: 7}}>Manfaat Jatuh Tempo: Dalam hal Peserta yang Diasuransikan masih hidup sampai akhir masa kepesertaan, maka akan dibayarkan manfaat jatuh tempo dalam bentuk Nilai Tunai* atas beban Dana Nilai Tunai** yang jumlahnya sebagaimana tercantum dalam Tabel Nilai Tunai pada Akhir Tahun Polis ke-20</li>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 7, paddingBottom: 7}}>Manfaat Mudik/Balik Lebaran***: Total 400% dari Santunan Asuransi atas beban Dana <i><b>Tabarru'</b></i> dan Nilai Tunai* atas beban Dana Nilai Tunai** akan dibayarkan jika Peserta Yang Diasuransikan meninggal dunia karena kecelakaan sebelum usia 70 tahun dalam periode 6 (enam) minggu sejak tanggal 1 (satu) Ramadan yang ditetapkan oleh Pemerintah Republik Indonesia dengan mengikuti ketentuan di dalam Polis, dan Polis akan berakhir.</li>
                            </ul>
                            <ol style={{listStyle: 'none'}}>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 700}}>Catatan:</li>  
                                <li  style={{color: 'red', fontSize: 12, fontWeight: 500, marginTop: 10, marginBottom: 10}}>* Nilai Tunai adalah sejumlah nilai yang akan dibayarkan dari Dana Nilai Tunai dalam hal kepesertaan pada PRUCinta berakhir dengan mengikuti ketentuan dalam Polis.</li>
                                <li  style={{color: 'red', fontSize: 12, fontWeight: 500, marginTop: 10, marginBottom: 10}}>** Dana Nilai Tunai adalah kumpulan dana yang berasal dari Kontribusi pada Pemegang Polis berdasarkan Porsi Nilai Tunai untuk pembayaran Nilai Tunai dalam hal kepesertaan PRUCinta berakhir.</li>
                                <li  style={{color: 'red', fontSize: 12, fontWeight: 500, marginTop: 10, marginBottom: 10}}>*** Maksimum tambahan manfaat asuransi yang dapat dibayarkan atas nama 1 (satu) Peserta Yang Diasuransikan dengan ketentuan:</li>
                            </ol>
                            <ul style={{listStyle: 'none'}}>
                                <li  style={{color: 'red', fontSize: 12, fontWeight: 500, marginTop: 10, marginBottom: 10}}>- usia &lt; 17 tahun maksimum sejumlah RP 4 Miliar; dan</li>
                                <li  style={{color: 'red', fontSize: 12, fontWeight: 500, marginTop: 10, marginBottom: 10}}>- usia &ge; 17 tahun maksimum sejumlah Rp 7 Miliar</li>
                                <li  style={{color: 'red', fontSize: 12, fontWeight: 500, marginTop: 10, marginBottom: 10}}>Ketentuan yang lebih rinci mengacu pada Polis.</li>    
                            </ul>
                            
                        </div>
                        <div style={{flex: 0.03, paddingTop: 24, paddingBottom: 24}} />
                        <div style={{flex: 0.05}} />
                    </div>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            {/* Here */}
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 40}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1, backgroundColor: 'red', borderRadius: 18, borderWidth: 4, borderColor: 'red', borderStyle: 'solid'}}>
                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 0.4}}>
                            <p style={{color: 'white', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Informasi Lain</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <button id='cursor' style={{color: 'white', fontSize: 18, fontWeight: 900, paddingTop: 3, paddingBottom: 3, backgroundColor: 'transparent', borderWidth: 0}} onClick={downloadFileRingkasan}> &gt; &gt; Download Informasi Ringkasan Produk Disini &lt; &lt;</button>
                        </div>
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 24}} />
                        <div style={{flex: 0.05}} />
                    </div>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

        <Footers />
    </div>
  )
}

import React from 'react'

import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/pkks.png'
import { useNavigate } from 'react-router-dom'

export const Pkks = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransikritis')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Brochure-PRUSolusi-Kondisi-Kritis-Syariah-221117.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Product-Summary-PRUSolusi-Kondisi-Kritis-Syariah-PSKKS-221206.pdf';
        window.open(fileUrl);
      };

      const downloadFilePenyakit = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/tabel-kondisi-kritis-pskks.pdf';
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
                    <h2 style={{fontSize: 52, color: 'red'}}>PRUSolusi Kondisi Kritis Syariah</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <img style={{alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudentialsyariah.co.id/id/health/prusolusi-kondisi-kritis-syariah//</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>PRUSolusi Kondisi Kritis Syariah, Asuransi Kondisi Kritis berbasis Syariah yang memberikan perlindungan atas 60 Kondisi Kritis Tahap Akhir dengan Masa Kepesertaan 1 tahun dan dapat diperpanjang hingga usia 99 tahun dengan perlindungan hingga usia 120 tahun. </p>
                    
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
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Pemegang Polis</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum 21 tahun atau 18 tahun jika sudah menikah (usia sebenarnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Peserta Yang Diasuransikan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 - 70 tahun (ulang tahun selanjutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Tanggal Akhir Kepesertaan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 (satu) tahun dan dapat diperpanjang hingga Peserta Yang Diasuransikan berusia 99 tahun serta dapat memberikan perlindungan hingga usia 120 tahun (usia sebenarnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Santunan Asuransi</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Santunan Asuransi : Rp20.000.000</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Tunggu</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>90 hari sejak Polis terbit</p>
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
                            <p style={{fontSize: 20, color: 'red'}}><b>Manfaat Utama Bagi Peserta Yang Diasuransikan</b></p>
                            
                            <br />

                            <p style={{fontSize: 20, color: 'red'}}><b>Perlindungan atas 60 Kondisi Kritis</b></p>
                            <p style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>100% Santunan Asuransi dari Dana <i>Tabarru'</i> jika Peserta Yang Diasuransikan memenuhi salah satu dari 60 Kondisi Kritis tahap Akhir atau sisa Santunan Asuransi jika Peserta Yang Diasuransikan telah melakukan klaim Manfaat Santunan Pemulihan dan polis berakhir.</p>
                            
                            <br />

                            <p style={{fontSize: 20, color: 'red'}}><b>Manfaat Meninggal Dunia</b></p>
                            <p style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>100% Santunan Asuransi dari Dana <i>Tabarru'</i> jika Peserta Yang Diasuransikan Menunggal Dunia, atau sisa Santunan Asuransi jika Peserta Yang Diasuransikan telah melakukan klaim Manfaat Santunan Pemulihan dan polis berakhir.</p>
                        
                            <br />

                            <p style={{fontSize: 20, color: 'red'}}><b>Manfaat Santunan Pemulihan</b></p>
                            <p style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>10% Santunan Asuransi dari Dana <i>Tabarru'</i> (akan mengurangi Santunan Asuransi atas <b>PRU</b>Solusi Kondisi Kritis Syariah), dengan jumlah maksimum Rp75.000.000 (tujuh puluh lima juta rupiah) mana yang lebih rendah, jika Peserta Yang Diasuransikan telah melewati Masa Tunggu mengalami untuk salah satu kondisi sebagai berikut:</p>
                            <ol>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>Menjalani Perawatan Yang Diakui atas kanker (tahap karsinoma <i>in-situ</i> maupun tahap stadium di atasnya); atau</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>Menjalani Tindakan Bedah pada organ penting (otak, jantung, hati, paru-paru, atau ginjal) yang diakibatkan oleh Penyakit atau Kecelakaan. Adapun Tindakan Bedah yang tidak termasuk di dalam manfaat ini meliputi:</li>
                                <ul>
                                    <li style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>Tindakan Bedah yang diakibatkan oleh batu ginjal;</li>
                                    <li style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>Tindakan Bedah dengan tujuan melakukan pemeriksaan diagnosis; dan/atau</li>
                                    <li style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>Tindakan Bedah eskploratif atau eksperimental.</li>
                                </ul>
                            </ol>
                            <p style={{fontSize: 16, color: 'red', paddingTop: 10, fontWeight: 500}}>Klaim untuk Manfaat Santunan Pemulihan hanya dapat dilakukan 1 (satu) kali selama masa kepesertaan <b>PRU</b>Solusi Kondisi Kritis Syariah</p>

                            <br />

                            <p style={{fontSize: 16, color: 'red', fontWeight: 500}}>Keterangan Tambahan: Ketentuan pembayaran Santunan Asuransi untuk anak Usia di bawah 5 tahun akan dikenakan persentase Santunan ASuransi apabila melakukan klaim Manfaat Santunan Pemulihan, Kondisi Kritis dan/atau Meninggal Dunia</p>
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
                            <br />
                            <button id='cursor' style={{color: 'white', fontSize: 18, fontWeight: 900, paddingTop: 3, paddingBottom: 3, backgroundColor: 'transparent', borderWidth: 0}} onClick={downloadFilePenyakit}> &gt; &gt; Download List Kondisi Kritis &lt; &lt;</button>
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

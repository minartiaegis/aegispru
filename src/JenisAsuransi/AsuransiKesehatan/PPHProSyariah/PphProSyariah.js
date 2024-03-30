import React from 'react'

import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/pphpro.png'
import { useNavigate } from 'react-router-dom'

export const PphProSyariah = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransikesehatan')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Brochure-PRUPrime-Hospital-Plus-Pro-Syariah.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Ringkasan-PRUPrime-Hospital-Plus-Pro-Syariah-without-PNG-Product.pdf';
        window.open(fileUrl);
      };

  return (
    <div>
        <Headers />
            <div className='backContPLNG'>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                  <button id='cursor' className='backButton' onClick={handleBackButton}>&lt;&lt; Back | Asuransi Kesehatan</button>  
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                    <h2 style={{fontSize: 52, color: 'red'}}>PRUPrime Healthcare Plus Pro Syariah</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <img style={{alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudential.co.id/id/health/medical/pruprime-healthcare-plus-pro/</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>PRUPrime Healthcare Plus Pro Syariah (PRUPrime Healthcare Plus Pro Syariah), produk Asuransi Tambahan yang dapat dipilih oleh Pemegang Polis pada Produk Yang Dikaitkan dengan Investasi (PAYDI) memberikan perlindungan ekstra tidak hanya di Indonesia, tapi juga hingga di seluruh dunia sesuai dengan prinsip-prinsip universal asuransi jiwa syariah yaitu saling berbagi risiko dan saling membantu.</p>
                    
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
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Kontribusi Bulanan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Mengikuti Ketentuan Polis Dasar</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Peserta Yang Diasuransikan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia 30 hari - 75 tahun (Ulang Tahun Berikutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Kepesertaan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Kepesertaan yang dapat dipilih hingga usia 55, 65, 75, 85, atau 99 tahun.</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Ketentuan Lainnya</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <ul>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 Peserta hanya boleh memiliki maksimal 1 Asuransi Kesehatan sejenis di Prudential Syariah</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: '2vh'}}>Memenuhi kriteria <i>financial underwriting</i> yang berlaku di Prudential Syariah.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: '2vh'}}>Melakukan pemeriksaan kesehatan sesuai dengan nilai Santunan Asuransi dan usia masuk (apabila dipersyaratkan).</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: '2vh'}}>Maksimum manfaat harian sesuai <i>Plan</i> yang dipilih pada tabel manfaat</li>
                            </ul>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Produk Dasar</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Produk Yang Dikaitkan dengan Investasi (PAYDI)</p>
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
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Manfaat Lainnya</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <p style={{fontSize: 16, color: 'red'}}><b>Manfaat Utama PRU</b>Prime Healthcare Plus Pro Syariah</p>
                            <p style={{fontSize: 16, color: 'red'}}>Asuransi Kesehatan <b>PRU</b>Prime Healthcare Plus Pro Syariah merupakan inovasi produk terbaru dari Prudential Syariah yang hadir dengan beberapa keunggulan, yaitu:</p>
                            <ol>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Fleksibilitas dalam menentukan Wilayah Kepesertaan, pilihan kamar, dan batas harga Kamar sesuai <i>plan</i> yang dipilih.</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Dapatkan manfaat hingga Rp70 miliar untuk <i>Plan</i> Diamond (termasuk <b>PRU</b>Prime Limit Booster).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Manfaat Biaya Bedah Rekonstruksi akibat kecelakaan atau kanker (hanya berlaku pada <i>plan</i> tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Manfaat <i>Telehealth</i> di Indonesia dan <i>Telehealth</i> untuk perawatan Kanker di Malaysia dan Singapura hanya di Rumah Sakit Rekanan Prudential Syariah (hanya berlaku pada <i>plan</i> tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Perawatan Paliatif berlaku untuk manfaat rawat inap dan rawat jalan berdasarkan rekomendasi dari dokter yang merawat (hanya berlaku pada <i>Plan</i> tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Manfaat perawatan tradisional termasuk obat-obatan herbal dan direkomendasikan oleh dokter yang merawat sebelumnya (hanya berlaku pada <i>Plan</i> tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Perawatan Psikiatri Rawat Jalan untuk kondisi psikiatri atau psikologis yang berkembang selama rawat inap atau pembedahan yang direkomendasikan oleh dokter yang merawat (hanya berlaku pada <i>Plan</i> tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Fasilitas <i>Free Room Upgrade</i>, berupa peningkatan kamar 1 (satu) kelas lebih tinggi dari <i>Plan</i> di Rumah Sakit yang bekerja sama dengan <b>PRU</b>Medical Network (PMN).</li>
                            </ol>
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

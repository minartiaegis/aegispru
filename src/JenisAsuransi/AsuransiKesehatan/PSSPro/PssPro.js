import React from 'react'

import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/pss.jpeg'
import { useNavigate } from 'react-router-dom'

export const PssPro = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransikesehatan')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/pdf/product/Brochure-PRUSolusi-Sehat-Plus-Pro-220902.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/pdf/product/Product-Summary-PRUPrime-Healthcare-Plus-Pro.pdf';
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
                    <h2 style={{fontSize: 52, color: 'red'}}>PRUSolusi Sehat Plus Pro</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <img style={{alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudential.co.id/id/health/medical/prusolusi-sehat-plus-pro/</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>PRUSolusi Sehat Plus Pro, sebuah produk Asuransi Kesehatan Diri yang memberikan perlindungan tidak hanya di Indonesia, tapi juga dengan jangkauan internasional sesuai standar pelayanan Prudential Indonesia yang sudah melindungi jutaan nasabahnya.</p>
                    
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
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Premi Bulanan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Rp210.000/Bulan</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Pemegang Polis</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum 21 tahun (usia sebenarnya) atau jika sudah menikah</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Tertanggung</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <ul>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia masuk minimum: 30 hari (Usia Sebenarnya)</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia masuk maksimum: 75 tahun (Ulang Tahun Berikutnya)</li>
                            </ul>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Perlindungan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 (satu) tahun dan dapat diperpanjang hingga Tertanggung berusia 99 tahun</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Persyaratan Lainnya</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}></p>
                            <ul>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700}}>Mengisi dan menandatangani Surat Pengajuan Asuransi Jiwa (SPAJ), dan profil risiko</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: 10}}>Ilustrasi Manfaat Produk Asuransi yang telah ditandatangani oleh Pemegang Polis*</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: 10}}>Fotokopi kartu identitas Pemegang Polis dan Tertanggung yang masih berlaku</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: 10}}>Membayar Premi melalui metode pembayaran yang tersedia (<i>cash/queue, credit card,</i> dan <i>auto debit</i> atau metode pembayaran lainnya)</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: 10}}>Melakukan pemeriksaan kesehatan sesuai dengan Plan yang dipilih dan usia masuk (apabila dipersyaratkan)</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: 10}}>Dokumen-dokumen lain yang Prudential Indonesia perlukan sebagai syarat penerbitan Polis</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, paddingTop: 10}}>Memenuhi kriteria <i>financial underwriting</i> yang berlaku di Prudential Indonesia</li>
                            </ul>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            {/* Here */}

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 40}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1, backgroundColor: 'white', borderRadius: 18, borderWidth: 4, borderColor: 'red', borderStyle: 'solid'}}>
                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 0.4}}>
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Manfaat Lainnya</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    {/* sampai sini */}
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <p style={{fontSize: 16, color: 'red'}}>Asuransi Kesehatan PRUSolusi Sehat Plus Pro merupakan inovasi produk terbaru dari Prudential Indonesia yang hadir dengan beberapa keunggulan, yaitu:</p>
                            <ol>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Fleksibilitas dalam menentukan Wilayah Pertanggungan, pilihan kamar, dan batas harga Kamar sesuai plan yang dipilih.</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Dapatkan manfaat 70 Miliar untuk plan Diamond (termasuk PRUSolusi Sehat Limit Booster).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Pilihan Perlindungan yang terjangkau dengan Plan Cermat.</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Manfaat Biaya Bedah Rekonstruksi seluruh tubuh akibat keecelakaan atau kanker (hanya berlaku pada plan tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Perawatan Paliatif, ditunjukan untuk meningkatkan kualitas hidup Tertanggung berdasarkan rekomendasi dari dokter yang merawat, termasuk rawat jalan dan rawat inap (hanya berlaku pada plan tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Manfaat perawatan tradisional termasuk obat-obatan herbal dan direkomendasikan oleh dokter yang merawat sebelumnya (hanya berlaku pada plan tertentu)</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Perawatan Psikiatri dan psikologis atas rekomendasi tertulis dari Dokter yang merawat Tertanggung pada saat Rawat Inap (hanya berlaku pada plan tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Manfaat Telehealth di Indonesia dan Telehealth untuk Perawatan Kanker di Malaysia dan Singapura hanya di Rumah Sakit Rekanan Prudential Indonesia (hanya berlaku pada plan tertentu).</li>
                                <li style={{fontSize: 16, color: 'red', paddingTop: 10}}>Fasilitas peningkatan Manfaat Tahunan sebesar 10% berupa No Claim Bonus setiap tahun dengan maksimal 50% dari Batas Manfaat Tahunan Awal.</li>
                            </ol>
                        </div>
                        <div style={{flex: 0.03, paddingTop: 24, paddingBottom: 24}} />
                        <div style={{flex: 0.05}} />
                    </div>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            {/* Here */}
            {/* <div style={{display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 40}}>
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
            </div> */}

        <Footers />
    </div>
  )
}

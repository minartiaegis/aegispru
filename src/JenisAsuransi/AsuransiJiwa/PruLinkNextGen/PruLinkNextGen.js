import React from 'react'

import '../PruLinkNextGen/PruLinkNextGen.css'
import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/Product-Hero-Image-PRULink-NextGen.png'
import { useNavigate } from 'react-router-dom'

export const PruLinkNextGen = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransijiwa')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/pdf/brochure/Brochure-PRULink-NextGen.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/pdf/product/Product-Summary-PRULink-NextGen.pdf';
        window.open(fileUrl);
      };

  return (
    <div>
        <Headers />
            <div className='backContPLNG'>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.9}}>
                  <button id='cursor' className='backButton' onClick={handleBackButton}>&lt;&lt; Back | Asuransi Jiwa</button>  
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.9}}>
                    <h2 style={{fontSize: 52, color: 'red'}}>PRULink NextGen</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 25, alignItems: 'center', marginBottom: 80}}>
                    <img style={{ alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudential.co.id/id/investment-linked/prulink-nextgen/</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.005}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>Asuransi Jiwa PRULink NextGen merupakan Produk Asuransi Jiwa Yang Dikaitkan dengan Investasi (PAYDI) dari PT. Prudential Life Assurance (Prudential Indonesia). Produk ini memiliki Masa Pertanggungan yang dapat dipilih smpai dengan Tertanggung berusia 75, 85, atau 99 tahun atau selama Polis masa aktif. Preemi yang Pemegang Polis bayarkan memberikan manfaat perlindungan (proteksi) dan manfaat investasi dalam bentuk Nilai Tunai (jika ada).</p>
                    
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
                <div style={{flex: 0.9}}>
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
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Premi Bulanan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 16}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Premi Rp500.000/bulan, Premi Berkala RP350.000/bulan, dan PRUSaver Rp.150.000/bulan</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Pemegang Polis</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 16}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Usia: 21 tahun atau 18 tahun jika sudah menikah (Usia Sebenarnya)</p>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Maksimal Usia: 70 tahun (Ulang Tahun berikutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Tertanggung</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 hari - 75 tahun (Ulang Tahun Berikutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Pembayaran Premi dan Masa Pertanggungan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 55}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Hingga Usia Tertanggung 75/85/99 tahun (Usia Sebenarnya), sesuai pilihan Pemegang Polis</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Manfaat Tambahan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>PRUPrime Healthcare Plus Pro</p>
                            <br />
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Program Pertanggungan Tambahan yang dapat ditambahkan oleh nasabah saat pengajuan PRULink NextGen dengan Manfaat Penggantian Biaya Perawatan Rumah Sakit atas dirawatnya Tertanggung di Rumah Sakit karena Penyakit atau Kecelakaan dan Manfaat Penggantian Biaya rawat Jalan</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Persyaratan Lainnya</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <ul>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Mengisi dan menandatangani Surat Pengajuan Asuransi Jiwa (SPAJ)</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Melakukan pemeriksaan kesehatan sesuai dengan nilai Uang Pertanggungan dan usia masuk (apabila dipersyaratkan)</li>
                            </ul>
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
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Jenis Dana Investasi</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Managed Fund</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Managed Fund Plus</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Cash Fund</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Fixed Income Fund</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Equity Fund Plus</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Infrastructure & Consumer Equity Fund</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Value Discovery Equity Fund</p>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500, paddingTop: 3, paddingBottom: 3}}><b style={{fontWeight: 800}}>PRU</b>Link Rupiah Equity Fund</p>
                        </div>
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 24}} />
                        <div style={{flex: 0.05}} />
                    </div>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            {/* Here */}

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1, backgroundColor: 'red', borderRadius: 18, paddingBottom: 30}}>
                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1}}>
                            <p style={{color: 'white', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Manfaat PRULink NextGen</p>  
                        </div>
                        <div style={{flex: 0.4}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}><b style={{fontWeight: 700}}>Manfaat Utama </b><b style={{fontWeight: 800}}>PRU</b>Link NextGen</p>
                            <br />
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}>Asuransi Jiwa <b style={{fontWeight: 800}}>PRU</b>Link NextGen merupakan inovasi produk terbaru dari Prudential Indonesia yang hadir dengan beberapa keunggulan, yaitu:</p>
                            <br />
                            <ol>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 20, paddingBottom: 10}}>Minimum Uang Pertanggungan Rp100 juta.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 10}}>Usia Masuk Tertanggung Hingga 75 Tahun (Ulang Tahun Berikutnya).</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 10}}>Fleksibilitas dalam pilihan Masa Perlindungan 75/85/99 tahun (Usia Sebenarnya).</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 10}}>Loyalty Bonus, berupa tambahan alokasi investasi yang akan dialokasikan ke dalam Saldo Unit Premi Berkala sejak tahun ke-11 hingga tahun ke-20 Polis*.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 10}}>Manfaat Meninggal Dunia akibat Kecelakaan, Penanggung akan membayarkan Manfaat Asuransi secara total sebesar 200% Uang Pertanggungan Asuransi Dasar ditambah Nilai Tunai (jika ada) dan Polis berakhir.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 10}}>Manfaat Meninggal karena Kecelakaan pada Periode musim Liburan Tahun Baru atau Idulfitri*, Penanggung akan membayarkan Manfaat Asuransi secara total sebesar 300% Uang Pertanggungan Asuransi Dasar ditambah Nilai Tunai (jika ada) dan Polis berakhir.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 10}}>Manfaat Tambahan Peristiwa Jenjang Kehidupan yang diproses secara GIO, berupa Peningkatan Uang Pertanggungan sebesar 10% dengan jumlah paling tinggi Rp200 juta setiap peristiwa hidup dan Rp1 miliar secara total, serta ekstra alokasi ke nilai tunai sebesar selisih dari kenaikan Premi selama satu tahun pertama setelah peningkatan Uang Pertanggungan.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, paddingTop: 10, paddingBottom: 5}}>Alokasi Premi untuk Investasi Sejak Tahun Pertama.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 400, paddingTop: 0, paddingBottom: 20, listStyle: 'none'}}><i>*Sebagaimana diatur dalam Ketentuan Khusus Asuransi Dasar Polis</i></li>
                            </ol>
                            <br />
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}>PAYDI PRULink NextGen merupakan produk asuransi. Komponen investasi dalam PAYDI mengandung risiko. Calon Pemegang Polis atau Tertanggung wajib membaca dan memahami ringkasan informasi produk dan layanan sebelum memutuskan untuk membeli PAYDI. Kinerja investasi masa lalu PAYDI tidak mencerminkan kinerja investasi masa datang PAYDI.</p>
                        </div>
                        <div style={{flex: 0.01, paddingTop: 24, paddingBottom: 24}} />
                        <div style={{flex: 0.05}} />
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
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Informasi Lain</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                        <div style={{flex: 0.05}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12}}>
                            <button id='cursor' style={{color: 'red', fontSize: 18, fontWeight: 900, paddingTop: 3, paddingBottom: 3, backgroundColor: 'transparent', borderWidth: 0}} onClick={downloadFileRingkasan}> &gt; &gt; Download Informasi Ringkasan Produk Disini &lt; &lt;</button>
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

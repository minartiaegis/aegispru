import React from 'react'

import '../PruCerah/PruCerah.css'
import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/prucerah.png'
import { useNavigate } from 'react-router-dom'

export const PruCerah = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransijiwa')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Brochure-PRUCerah-PRUCerah-Plus-KV-Shinta-PSLA-230911.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Product-Summary-Asuransi-Jiwa-Syariah-PRUCerah-230911.pdf';
        window.open(fileUrl);
      };

  return (
    <div>
        <Headers />
            <div className='backContPLNG'>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                  <button id='cursor' className='backButton' onClick={handleBackButton}>&lt;&lt; Back | Asuransi Jiwa</button>  
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1}}>
                    <h2 style={{fontSize: 52, color: 'red'}}>PRUCerah</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <img style={{alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudentialsyariah.co.id/id/life/prucerah//</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>Asuransi Jiwa Syariah PRUCerah Produk Asuransi Dwiguna yang memberikan Perlindungan atas Jaminan Pendidikan Anak atau orang yang Anda sayangi. Terdapat Manfaat Dana Pendidikan yang memberikan manfaat berupa Penarikan Tunai Sekaligus serta Penarikan Tunai Bulanan selama 4 tahun.</p>
                    
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
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Premi/Kontribusi Bulanan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 16}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Rp500.000/Bulan atau Rp5.500.000/Tahun</p>
                            
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Tertanggung/Peserta</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700, paddingBottom: 10}}>- Peserta Utama Yang Diasuransikan: 1 - 18 tahun (ulang tahun selanjutnya)</p>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>- Peserta Tambahan Yang Diasuransikan: 19 - 55 tahun (ulang tahun selanjutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Perlindungan s/d Usia Tertanggung/Peserta</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 55}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Sejak Polis Terbit Sampai dengan 4 tahun setelah Masa Tunggu  Manfaat Dana Pendidikan</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Pilihan Masa Tunggu Manfaat Dana Pendidikan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 55}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>8 - 18 Tahun sejak Polis diterbitkan</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Manfaat Tambahan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>N/A</p>
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
                        <div style={{flex: 0.03}} />
                        <div style={{flex: 0.4}}>
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Manfaat Plan PRUCerah</p>  
                        </div>
                        <div style={{flex: 0.1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}><b>- Manfaat Bagi Peserta Utama Yang Diasuransikan</b></p>  
                            <br/>
                            <p style={{color: 'red', fontSize: 16, fontWeight: 500}}><b>Manfaat Dana Pendidikan</b></p> 
                            <p style={{color: 'red', fontSize: 16, fontWeight: 500}}>Apabila Masa Tunggu Manfaat Dana Pendidikan telah berakhir dan Polis Asuransi Jiwa Syariah PRUCerah plan PRUCerah Plus masih berlaku, maka akan diberikan Manfaat Dana Pendidikan atas beban Dana Nilai Tunai sebagai berikut:</p> 
                        </div>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.03}} />
                        <div style={{flex: 1}}>
                            <p style={{color: 'red', fontSize: 14, fontWeight: 500, paddingBottom: 24}}>* Nilai Tunai yang dibayarkan besarnya terbentuk sesuai dengan hasil pengembanngannya (jika ada) yang dikelola berdasarkan prinsip syariah sesuai dengan kebijakan investasi Pengelola. Dana Nilai Tunai Peserta akan diinformasikan ke Pemegang Polis melalui laporan transaksi tahunan PRUAnugerah Syariah yang akan dikirimkan setiap tahun.</p>  
                            <p style={{color: 'red', fontSize: 14, fontWeight: 500, paddingBottom: 24}}>** Maksimal santunan meninggal akibat Kecelakaan atau santunan meninggal akibat Kecelakaan dalam Periode Musim Liburan atau Ibadah yang dapat dibayarkan atas nama 1 Peserta Yang Diasuransikan adalah sebesar Rp2.000.000.000.</p>  
                            <p style={{color: 'red', fontSize: 14, fontWeight: 500, paddingBottom: 24}}>*** Total persentase yang dibayarkan adalah sebelum Manfaat Dana Usia Mapan dibayarkan</p>  
                        </div>
                        <div style={{flex: 0.1}} />
                    </div>  
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            {/* Here */}

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 1, backgroundColor: 'red', borderRadius: 18}}>
                    <div style={{display: 'flex', flexDirection: 'row',  paddingTop: 30, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                        <div style={{flex: 0.06}} />
                        <div style={{flex: 1}}>
                            <p style={{color: 'white', fontSize: 24, fontWeight: 700, paddingBottom: 24}}><i>Ujrah</i>, <i>Nisbah</i>, Iuran <i>Tabarru’</i>, dan Porsi Nilai Tunai</p>  
                        </div>
                        <div style={{flex: 1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}><i>Ujrah</i></p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}>	Besar <i>Ujrah</i> sebagaimana ketentuan Polis dibebankan atas Kontribusi yang dibayarkan sesuai dengan frekuensi pembayaran Kontribusi sejak Tanggal Mulai Kepesertaan.</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}><i>Ujrah</i> Pengelolaan Dana <i>Tabarru’</i></p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 16}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}><i>Ujrah</i> Pengelolaan Dana <i>Tabarru’</i> sebesar 0%.</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Porsi Nilai Tunai</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}>Porsi Nilai Tunai sebagaimana ketentuan Polis dialokasikan atas Kontribusi yang dibayarkan sesuai dengan frekuensi pembayaran Kontribusi sejak Tanggal Mulai Kepesertaan.</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Iuran <i>Tabarru’</i></p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 500}}>Iuran <i>Tabarru’</i> adalah hibah sejumlah uang yang telah disanggupi oleh Pemegang Polis ke dalam Dana <i>Tabarru’</i>. Dana <i>Tabarru’</i> akan digunakan untuk keperluan tolong menolong bila ada Peserta yang mengalami risiko sebagaimana ditentukan dalam Polis. Iuran <i>Tabarru’</i> akan dikenakan selama Polis aktif dan besarnya bergantung pada jenis kelamin, status merokok atau tidak merokok dan besarnya Santunan Asuransi. Rincian Iuran <i>Tabarru’</i> dapat dilihat pada Ilustrasi Produk Asuransi yang disediakan oleh Tenaga Pemasar. Iuran <i>Tabarru’</i> akan dikenakan dari Kontribusi yang dibayarkan.</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}><i>Nisbah</i> Pengelolaan Dana Nilai Tunai Peserta</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <ol className='sortAlpha'>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, marginLeft: -15}}><i><b>Nisbah</b></i> Pengelolaan Dana Nilai Tunai Peserta untuk Pengelola sebesar 20% dari hasil investasi Dana Nilai Tunai Peserta per tahun.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, marginLeft: -15}}><i><b>Nisbah</b></i> Pengelolaan Dana Nilai Tunai Peserta untuk Peserta Yang Diasuransikan sebesar 80% dari hasil investasi Dana Nilai Tunai Peserta per tahun.</li>
                            </ol>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingRight: 10}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Pajak Denda Penebusan Polis (Denda <i>Surrender</i>)</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                        <p style={{color: 'white', fontSize: 18, fontWeight: 500}}>Denda Penebusan Polis (Denda <i>Surrender</i>) dihitung dari Nilai Tunai yang terbentuk pada saat Penebusan Polis</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.04, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 1, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingRight: 10}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700, paddingBottom: 12}}>Risiko yang perlu Diketahui</p>  
                            <ol className='sortAlpha'>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, marginLeft: -15, paddingBottom: 10}}><b>Risiko Ekonomi dan Perubahan Politik (Domestik dan Internasional),</b> yaitu risiko yang berhubungan dengan perubahan kondisi ekonomi, kebijakan politik, hukum dan peraturan pemerintah yang berkaitan dengan dunia investasi dan usaha baik di dalam maupun luar negeri.</li> 
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, marginLeft: -15, paddingBottom: 10}}><b>Risiko Kredit,</b> yaitu risiko yang dapat terjadi jika pihak ketiga yang menerbitkan instrumen investasi mengalami wanprestasi (default) atau tidak mampu memenuhi kewajibannya untuk membayar sebagian/seluruh pokok utang, hasil pengembangan investasi dan/atau dividen pada saat jatuh tempo. Prudential Syariah memiliki limit penempatan dana yang ketat, hanya kepada institusi yang memiliki <i>credit rating</i> yang baik berdasarkan <i>International Rating Agency</i> maupun <i>Local Rating Agency</i> dan dikaji ulang secara berkala.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 500, marginLeft: -15}}><b>Risiko Operasional,</b> yaitu risiko yang timbul dari proses internal yang tidak memadai/gagal, atau dari perilaku karyawan, pihak ketiga (termasuk, namun tidak terbatas pada Tenaga Pemasar) dan sistem operasional, atau dari peristiwa eksternal (termasuk situasi <i>force majeure</i> namun tidak terbatas pada bencana alam, kebakaran, kerusuhan, dan lain-lain) yang dapat mempengaruhi kegiatan operasional perusahaan.</li> 
                            </ol>
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

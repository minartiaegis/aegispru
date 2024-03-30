import React from 'react'

import '../PruAnugerahSyariah/PruAnugerahSyariah.css'
import { Footers } from '../../../Global/Footers/Footers'
import { Headers } from '../../../Global/Headers/Headers'

import photo from '../../../assets/extras/Product-Hero-Image-PRULink-NextGen.png'
import { useNavigate } from 'react-router-dom'

export const PruAnugerahSyariah = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate('/asuransijiwa')
    }

    const downloadFile = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/brochure/Brochure-Asuransi-Jiwa-PRUAnugerah-Syariah_021023.pdf';
        window.open(fileUrl);
      };

      const downloadFileRingkasan = () => {
        const fileUrl = 'https://www.prudentialsyariah.co.id/export/sites/syariahcorp-id/id/.galleries/pdf/product/Product-Summary-PRUAnugerah-Syariah.pdf';
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
                    <h2 style={{fontSize: 52, color: 'red'}}>PRUAnugerah Syariah</h2>
                </div>
                <div className='gapCont1' style={{flex: 0.05}} />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{ flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <img style={{alignContent: 'center'}} src={photo} alt='PRULink NextGen'/>
                    <p style={{paddingTop: 5, color: 'gray', textAlign: 'center', fontSize: 12}}><i>source : www.prudential.co.id/id/investment-linked/prulink-nextgen/</i></p>
                </div> 
                <div className='gapCont1' style={{flex: 0.05}} />
                <div style={{flex: 0.425, marginTop: 50, alignItems: 'center', marginBottom: 80}}>
                    <p style={{fontSize: 18}}>Asuransi Jiwa PRUAnugerah Syariah (PRUAnugerah Syariah) merupakan produk asuransi jiwa tradisional syariah dari PT Prudential Sharia Life Assurance (Prudential Syariah) yang hadir sebagai solusi perlindungan jiwa seumur hidup, bentuk peninggalan Amanah bagi keluarga tercinta dari kini hingga nanti. Produk ini tersedia dalam mata uang Rupiah, dan memberikan Manfaat Asuransi selama Polis masih aktif.</p>
                    
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
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimum Kontribusi Bulanan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 16}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Minimal: Kontribusi Berkala Rp500.000/bulan</p>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Maksimal : N/A</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Usia Masuk Peserta Yang Diasuransikan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>1 - 70 tahun (Ulang Tahun Berikutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Masa Kepesertaan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 55}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Hingga Usia Peserta Yang Diasuransikan 120 tahun (Ulang Tahun berikutnya)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 12, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'white', fontSize: 18, fontWeight: 700}}>Ketentuan Lainnya</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'white', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <ul>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Mengisi dan menandatangani Surat Pengajuan Asuransi Jiwa Syariah (SPAJ Syariah), dan profil risiko.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Ilustrasi Manfaat Produk Asuransi yang telah ditandatangani oleh Pemegang Polis.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Melakukan pemeriksaan kesehatan sesuai dengan nilai Santunan Asuransi dan usia masuk (apabila dipersyaratkan).</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Dokumen-dokumen lain yang Prudential Syariah perlukan sebagai syarat penerbitan Polis.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Fotokopi kartu identitas Pemegang Polis dan Peserta Yang Diasuransikan yang masih berlaku.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Melakukan pembayaran Kontribusi secara langsung ke Prudential Syariah melalui channel-channel pembayaran Kontribusi yang ditunjuk Prudential Syariah setelah pengajuan Polis anda disetujui Prudential Syariah.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Bukti pembayaran Kontribusi dengan nominal sebagaimana yang ditetapkan oleh Pengelola setelah keputusan penerimaan kepesertaan.</li>
                                <li style={{color: 'white', fontSize: 18, fontWeight: 700, marginLeft: -15}}>Memenuhi kriteria <b><i>medical</i></b> dan <b><i>financial underwriting</i></b> yang berlaku di Prudential Syariah.</li>
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
                        <div style={{flex: 0.03}} />
                        <div style={{flex: 0.4}}>
                            <p style={{color: 'red', fontSize: 24, fontWeight: 700, paddingBottom: 24}}>Manfaat PRUAnugerah Syariah</p>  
                        </div>
                        <div style={{flex: 0.1}} />
                    </div>  

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}><b>Manfaat Asuransi</b></p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Manfaat Asuransi yang dibayarkan</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Santunan Meninggal</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <ul>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 500, marginLeft: -15}}>Sebelum Manfaat Dana Usia Mapan dibayarkan: <b>150% Santunan Asuransi + Nilai Tunai* yang terbentuk</b></li>
                                <li style={{color: 'red', fontSize: 18, fontWeight: 500, marginLeft: -15}}>Setelah Manfaat Dana Usia Mapan dibayarkan: <b>100% Santunan Asuransi + Nilai Tunai* yang terbentuk</b></li>
                            </ul>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Santunan Meninggal akiat Kecelakaan**</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500}}><b>Total yang dibayarkan hingga 250% Santunan Asuransi*** </b>(Jika Peserta Yang Diasuransikan meninggal dunia karena Kecelakaan sebelum berusia 70 (tujuh puluh) tahun dan Polis berakhir)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Santunan Meninggal akibat Kecelakaan dalam Periode Musim Liburan atau Ibadah**</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500}}><b>Total yang dibayarkan hingga 350% Santunan Asuransi***</b> (Jika Peserta Yang Diasuransikan meninggal dunia karena Kecelakaan saat idulfitri, umrah, dan haji sebelum berusia 70 (tujuh puluh) tahun dan Polis berakhir)</p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Manfaat Bebas Kontribusi</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>Apabila Peserta Yang Diasuransikan terdiagnosis salah satu dari 60 Kondisi Kritis dalam Masa Pembayaran Kontribusi, maka Pengelola akan membayarkan sisa  Kontribusi yang belum dibayarkan atas beban Dana <i>Tabarru’</i></p>
                        </div> 
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                        <div style={{flex: 0.4, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Manfaat Dana Usia Mapan</p>  
                        </div>
                        <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                            <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>Akan dibayarkan apabila Peserta Yang Diasuransikan masih hidup dan Polis berlaku saat Tanggal Pembayaran Manfaat Dana Usia Mapan sebesar:</p>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {/* <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} /> */}
                                <div style={{flex: 0.7, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Usia Masuk Peserta Yang Diasuransikan</p>  
                                </div>
                                <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 700}}>Manfaat Dana Usia Mapan (Proyeksi sebesar % Kontribusi yang telah dibayarkan oleh Pemegang Polis)</p>
                                </div> 
                                <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {/* <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} /> */}
                                <div style={{flex: 0.7, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>1 - 55 tahun</p>  
                                </div>
                                <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>100%</p>
                                </div> 
                                <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {/* <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} /> */}
                                <div style={{flex: 0.7, paddingTop: 24, paddingBottom: 6, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>56 - 60 tahun</p>  
                                </div>
                                <div style={{flex: 1, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3, paddingTop: 24, paddingBottom: 24}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>80%</p>
                                </div> 
                                <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} />
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {/* <div style={{flex: 0.05, borderBottomColor: 'red', borderBottomStyle: 'solid', borderBottomWidth: 3}} /> */}
                                <div style={{flex: 0.7, paddingTop: 24, paddingBottom: 6}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>61 - 70 tahun</p>  
                                </div>
                                <div style={{flex: 1, borderBottomColor: 'red', paddingTop: 24, paddingBottom: 24}}>
                                    <p style={{color: 'red', fontSize: 18, fontWeight: 500}}>20%</p>
                                </div> 
                                <div style={{flex: 0.05}} />
                            </div>

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

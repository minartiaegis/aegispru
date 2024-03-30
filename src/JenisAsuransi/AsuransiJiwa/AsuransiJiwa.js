import './AsuransiJiwa.css'
import { Headers } from '../../Global/Headers/Headers'
import { Footers } from '../../Global/Footers/Footers'

import asJiwa from '../../assets/extras/asuransijiwa.jpeg'
import { useNavigate } from 'react-router-dom'

export const AsuransiJiwa = () => {
    const navigate = useNavigate()

    const handleClickPruLinkNextGen = () => {
        navigate('/prulinknextgen')
    }

    const handleClickPruWarisan = () => {
        navigate('/pruwarisan')
    }

    const handleClickPruLinkSyariahNextGen = () => {
        navigate('/prulinksyariahnextgen')
    }

    const handleClickPruCinta = () => {
        navigate('/prucinta')
    }

    const handleClickPruAnugerahSyariah = () => {
        navigate('/pruanugerahsyariah')
    }

    const handleClickPruCerah = () => {
        navigate('/prucerah')
    }

  return (
    <div>
        <Headers />
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <div style={{flex: 0.05}} />
            <div style={{flex: 0.2}}>
                <img className='picAsJiwa' src={asJiwa} alt='none' />
            </div>
            <div style={{flex: 0.05}}/>
            <div style={{flex: 0.65, paddingTop: 50}}>
                <h1 className='titleAsJi'>Asuransi Jiwa</h1>
                <p className='pAsJi'>Asuransi Jiwa adalah alat penting dalam perencanaan keuangan yang melibatkan ketahanan finansial dan perlindungan bagi Anda dan orang-orang yang Anda cintai. Ini adalah alat yang memberikan ketenangan pikiran bahwa keluarga Anda akan terlindungi secara finansial jika terjadi yang tak terduga.</p>
            </div>
            <div style={{flex: 0.05}} />
        </div>

        <div style={{display: 'flex', marginBottom: 30}}>
            <div style={{flex: 0.05}} />
            <div style={{flex: 0.9}}>
                <h2 className='subTitleASJ'>Mengapa Asuransi Jiwa Penting?</h2>
                <p className='pAsJi' style={{marginBottom: 10}}>
                    Asuransi Jiwa memberikan perlindungan finansial kepada keluarga Anda dalam berbagai cara :
                </p>

                <ul>
                    <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20, marginTop: 15}}><strong className='str1'>Pembayaran Manfaat</strong> <br/> Dalam hal yang tidak terduga, asuransi jiwa memberikan pembayaran manfaat kepada ahli waris Anda, yang dapat digunakan untuk membayar hipotek, biaya pendidikan, atau kebutuhan sehari-hari.</li>
                    <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Warisan Finansial</strong><br/> Ini adalah cara untuk meninggalkan warisan finansial yang kuat untuk anak-anak dan cucu-cucu Anda.</li>
                    <li className='pAsJi' style={{paddingBottom: 20, marginLeft: 20}}><strong className='str1'>Pensiun yang Aman</strong> <br/> Dengan beberapa produk, Anda dapat merencanakan masa pensiun yang nyaman dengan tabungan yang dibangun sepanjang hidup Anda.</li>
                </ul>
            </div>
            <div style={{flex: 0.05}} />
        </div>

        <div>
            <div className="line-with-text">
                <div className="line"></div>
                <span className="judulContentJenis">PRODUK KONVENSIONAL</span>
                <div className="line"></div>
            </div>

            <div>
                <div className="produkCont">
                    {/* <div /> */}
                    <button id='cursor' class="item1" onClick={handleClickPruLinkNextGen}>PRULink NextGen</button>
                    {/* <button class="item2" onClick={handleClickPruWarisan}>PRUWarisan</button> */}
                    {/* <div class="item3">3</div> */}
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
                    <button id='cursor' class="item1" onClick={handleClickPruLinkSyariahNextGen}>PRULink Syariah NextGen</button>
                    <button id='cursor' class="item2" onClick={handleClickPruCinta}>PRUCinta</button>
                    <button id='cursor' class="item3" onClick={handleClickPruAnugerahSyariah}>PRUAnugerah Syariah</button>
                </div>
                <div class="produkCont">
                    {/* <div /> */}
                    <button class="item4" onClick={handleClickPruCerah} id='cursor'>PRUCerah</button>
                    
                    {/* <div class="item3">3</div> */}
                </div>
            </div>
        </div>

        <Footers />
    </div>
  )
}

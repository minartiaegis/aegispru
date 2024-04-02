import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePages } from './Page/HomePages';
import { AsuransiJiwaPages } from './Page/AsuransiJiwaPages';
import { AsuransiKritisPages } from './Page/AsuransiKritisPages';
import { AsuransiKesehatanPages } from './Page/AsuransiKesehatanPages';
import { PruLinkNextGenPages } from './Page/AsuransiJiwa/PruLinkNextGenPages';
import { PruWarisanPages } from './Page/AsuransiJiwa/PruWarisanPages';
import { PruLinkSyariahNextGenPages } from './Page/AsuransiJiwa/PruLinkSyariahNextGenPages';
import { PruCintaPages } from './Page/AsuransiJiwa/PruCintaPages';
import { PruAnugerahSyariahPages } from './Page/AsuransiJiwa/PruAnugerahSyariahPages';
import { PruCerah } from './JenisAsuransi/AsuransiJiwa/PruCerah/PruCerah';
import { CareerPages } from './Page/CareerPages';
import { ContactUsPages } from './Page/ContactUsPages';
import { Pcb88Pages } from './Page/AsuransiKritis/pcb88Pages';
import { PkksPages } from './Page/AsuransiKritis/pkksPages';
import { PphProPages } from './Page/AsuransiKesehatan/PphProPages';
import { PssProPages } from './Page/AsuransiKesehatan/PssProPages';
import { PphProSyariahPages } from './Page/AsuransiKesehatan/PphProSyariahPages';
import { PssProSyariahPages } from './Page/AsuransiKesehatan/PssProSyariahPages';
// import AnotherComponent from './AnotherComponent';

function Routing() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePages />} />
        <Route path='/career' element={<CareerPages />} />
        <Route path='/contactus' element={<ContactUsPages />} />

        <Route path='/asuransijiwa' element={<AsuransiJiwaPages />} />
          <Route path='/prulinknextgen' element={<PruLinkNextGenPages />} />
          <Route path='/pruwarisan' element={<PruWarisanPages />} />
          <Route path='/prulinksyariahnextgen' element={<PruLinkSyariahNextGenPages />} />
          <Route path='/prucinta' element={<PruCintaPages />} />
          <Route path='/pruanugerahsyariah' element={<PruAnugerahSyariahPages />} />
          <Route path='/prucerah' element={<PruCerah />} />

        <Route path='/asuransikritis' element={<AsuransiKritisPages />} />
          <Route path='/pcb88' element= {<Pcb88Pages />} />
          <Route path='/pkks' element= {<PkksPages />} />
        <Route path='/asuransikesehatan' element={<AsuransiKesehatanPages />} />
          <Route path='/pphpro' element= {<PphProPages />} />
          <Route path='/psspro' element= {<PssProPages />} />
          <Route path='/pphprosyariah' element= {<PphProSyariahPages />} />
          <Route path='/pssprosyariah' element= {<PssProSyariahPages />} />
      </Routes>
    </Router>
  );
}

export default Routing;


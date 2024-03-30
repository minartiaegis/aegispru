import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    jenisPertanyaan: '',
    subject: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const createMailtoLink = () => {
    const { name, subject, content, jenisPertanyaan } = formData;
    const mailtoLink = `mailto:minartichen@gmail.com?subject=${encodeURIComponent(`${jenisPertanyaan} - ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nSubject: ${jenisPertanyaan} - ${subject}\nContent: ${content}`)}`;
    window.location.href = mailtoLink;
  };

  const handleOpenWhatsApp = () => {
    // Replace '1234567890' with the recipient's phone number including the country code
    const phoneNumber = '+6281250329319';
    const { name, subject, content, jenisPertanyaan } = formData;

    if (!formData.name || !formData.subject || !formData.content) {
      alert('Field tidak boleh kosong!');
      return;
    }

    const message = encodeURIComponent(`Name: ${name}\nSubject: ${jenisPertanyaan} - ${subject}\nContent: ${content}`);

    // Create the WhatsApp link with a pre-filled message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open the link in a new tab
    window.open(whatsappLink, '_blank');

    setFormData({
      name: '',
      subject: '',
      jenisPertanyaan: '',
      content: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.subject || !formData.content) {
      alert('Field tidak boleh kosong!');
      return;
    }

    createMailtoLink();

    setFormData({
      name: '',
      subject: '',
      jenisPertanyaan: '',
      content: ''
    });
  };

  return (
    <div style={{display: 'flex', flexDirection: 'row', marginLeft: '10vw', marginRight: '10vw', marginTop: '7vh', justifyContent: 'space-around', height: '50vh'}}>
      <div style={{flex: 1, borderRightWidth: 1, borderRightColor: 'red', borderRightStyle: 'solid', alignItems: 'center', justifyContent: 'center', display: 'flex'}} >
        
        <form onSubmit={handleSubmit}>
          <p style={{fontSize: 24, fontWeight: 700, marginBottom: '3vh'}}>Silahkan Isi Form Dibawah Ini</p>
          <label style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{width: '10vw'}}>Nama</p>
            <p style={{width: '1vw'}}>:</p>
            <input
              type="text"
              name="name"
              style={{width: '20vw'}}
              value={formData.name}
              onChange={handleChange}
              placeholder='Nama Lengkap'
            />
          </label>

          <br />

          <label style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{width: '10vw'}}>Jenis Pertanyaan</p>
                <p style={{width: '1vw'}}>:</p>
            <select
              name="jenisPertanyaan"
              value={formData.jenisPertanyaan}
              onChange={handleChange}
              style={{width: '20.5vw', height: '2.7vh', backgroundColor: 'transparent', borderRadius: 2}}
              id='cursor'
            >
              <option value="">Pilih Jenis Pertanyaan</option>
              <option value="Produk">Produk</option>
              <option value="Karir">Karir</option>
            </select>
          </label>

          <br />

            <label style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{width: '10vw'}}>Subject</p>
                <p style={{width: '1vw'}}>:</p>
                <input
                    type="text"
                    name="subject"
                    style={{width: '20vw'}}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Tentang Apa'
                />
            </label>

          <br />

            <label style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{alignItems: 'flex-start', width: '10vw'}}>Content</p>
                <p style={{width: '1vw'}}>:</p>
                <textarea
                    name="content"
                    style={{minHeight: '15vh', minWidth: '20vw', maxHeight: '15vh', maxWidth: '20vw'}}
                    value={formData.content}
                    onChange={handleChange}
                    placeholder='Ceritakan detail yang ingin ditanyakan'
                />
            </label>

            <br />
        
        </form>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', borderLeftWidth: 1, borderLeftColor: 'red', borderLeftStyle: 'solid'}}>
        <p style={{fontSize: 24, fontWeight: 700}}>Sudah Mengisi Form Tersebut?</p>
        <button id='cursor' onClick={handleSubmit} style={{marginTop: '2vh', fontSize: 18, paddingLeft: '3vw', paddingRight: '3vw', height: '5vh', width: '20vw'}} type="submit">Kirim Via Email</button>
        <button id='cursor' onClick={handleOpenWhatsApp} style={{marginTop: '2vh', fontSize: 18, paddingLeft: '3vw', paddingRight: '3vw', height: '5vh', width: '20vw'}}>Kirim Via Whatsapp</button>
      </div>
    </div>
  );
};

export default MyForm;

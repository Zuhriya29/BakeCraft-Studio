import '../styles/Contact.css'

function Contact() {
  return (
    <div id="contact">
        <div className="container text-center footer">
            <div className="row">
                    <div className="col m-0">
                        <h1>BakeCraft Studio</h1>
                        <p>Kelezatan dalam Setiap Kreasi</p>
                    </div>
            </div><br/><br/>
            <div className="row">
                <div className="col-md-4">
                 <h5>Alamat</h5>
                 <p>Jl. Mawar No. 123, Jakarta, Indonesia</p>
                </div>
                <div className="col-md-4">
                 <h5>Kontak</h5>
                 <p>Telepon : +62 812-3456-7890</p>
                 <p>Email : info@bakecraftstudio.com</p>
                </div>
                <div className="col-md-4">
                    <h5>Jam Operasional</h5>
                    <p>Senin - Sabtu : 09:00 - 17:00 WIB</p>
                    <p>Minggu & Hari Libur : Tutup</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

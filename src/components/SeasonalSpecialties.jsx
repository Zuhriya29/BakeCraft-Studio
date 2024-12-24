import '../styles/Style.css'

function SeasonalSpecialties(){
  return (
    <div>
        <div className="judul">
            <a href="/" className="back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                <p>Kembali</p>
            </a>
            <h1>Seasonal Specialties</h1>
        </div>
        <div className="detail">
            <div className="container ps-5 text-center">
                <div className="row pt-5 pb-5">
                    <div className="col">
                        <h5><b>Seasonal Specialties</b>, Kursus ini berfokus pada kreasi dessert sesuai musim atau tema tertentu</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <img src="/images/cookies-natal.jpg" className="col-12 m-0"/>
                        <p className="mt-2"><b>Cookies Natal</b></p>
                        <p>Membuat kue berbentuk pohon Natal, bintang, atau gingerbread.</p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img src="/images/kuelebaran.jpg" className="col-12 m-0"/>
                        <p className="mt-2"><b>Kue Lebaran</b></p>
                        <p>Kreasi seperti nastar, kastengel, atau kue lapis.</p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img src="/images/dessert.jpg" className="col-12 m-0"/>
                        <p className="mt-2"><b>Dessert tematik</b></p>
                        <p> Kue atau dessert untuk acara khusus seperti Halloween, ulang tahun, atau perayaan lainnya.</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="container text-center pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h3><b>Durasi</b></h3>
                        <h3>1 hari</h3>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h1><b>Harga</b></h1>
                        <h1>Rp 500.000</h1>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h3><b>Jadwal</b></h3>
                        <h3>1 hari, 4 jam</h3>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5 mb-5 langganan">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                <p className="text"><a href="https://wa.me/627762455694">BERLANGGANAN SEKARANG</a></p>
            </div><br/><br/>
        </div>
    </div>
  )
}

export default SeasonalSpecialties

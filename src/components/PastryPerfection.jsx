import '../styles/Style.css'

function PastryPerfection(){
  return (
    <div>
        <div className="judul">
            <a href="/" className="back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                <p>Kembali</p>
            </a>
            <h1>Pastry Perfection</h1>
        </div>
        <div className="detail">
            <div className="container ps-5 text-center">
                <div className="row pt-5 pb-5">
                    <div className="col">
                        <h5><b>Pastry Perfection</b>, Kursus untuk menciptakan pastry klasik yang lezat dan berlapis-lapis</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <img src="../src/images/laminasi-adonan.jpg" className="col-12 m-0"/>
                        <p className="mt-2"><b>Teknik laminasi</b></p>
                        <p>Cara melapisi adonan dengan mentega untuk menghasilkan tekstur yang ringan dan berlapis.</p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img src="../src/images/pastry.jpg" className="col-12 m-0"/>
                        <p className="mt-2"><b>Pembuatan pastry klasik</b></p>
                        <p>Membuat croissant, puff pastry, dan Danish dari awal hingga akhir</p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img src="../src/images/trik.jpg" className="col-12 m-0"/>
                        <p className="mt-2"><b>Trik dan tips</b></p>
                        <p>Rahasia menghasilkan pastry dengan hasil sempurna setiap kali.</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="container text-center pt-5 pb-5">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h3><b>Durasi</b></h3>
                        <h3>2,5 minggu</h3>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h1><b>Harga</b></h1>
                        <h1>Rp 1.500.000</h1>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h3><b>Jadwal</b></h3>
                        <h3>2 hari/minggu, 4 jam/hari</h3>
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

export default PastryPerfection

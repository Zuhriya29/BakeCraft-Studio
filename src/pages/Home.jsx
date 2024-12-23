import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'

import { homeSection } from '../data/HomeSection.jsx'
import { coursesSection, aboutusSection, fasilitasSection} from '../data/CoursesSection.jsx'

import parse from 'html-react-parser'

import '../styles/Home.css'

function Home() {
  return (
    <>
        <Navbar/>
        <div className="order">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
            <p className="text"><a href="https://wa.me/627762455694">BERGABUNG SEKARANG</a></p>
        </div>
        <div className="wrapper">
        {/* untuk home */}
            <section id="home" className="home">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={homeSection.image}/>
                    </div>
                    <div className="col-md-6">
                        <div className="kolom">
                            {parse(homeSection.content)}
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* untuk aboutus */}
            <section id="aboutus" className="aboutus">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="kolom">
                            {parse(aboutusSection.content)}
                        </div>
                    </div>
                    <img src={aboutusSection.image}/>
                </div>
            </section>

        {/* untuk courses */}
            <section id="courses" className="courses">
                <div className="kolom">
                    {parse(coursesSection.content)}
                </div>
            </section>

        {/* untuk fasilitas */}
        <section id="fasilitas" className="fasilitas">
                <div className="kolom">
                    {parse(fasilitasSection.content)}
                </div>
        </section>

        <section id="contact">
            <Contact />
        </section>
        <Footer/>
    </>
  )
}

export default Home

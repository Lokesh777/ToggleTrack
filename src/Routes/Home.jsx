// import { Navbar } from "react-bootstrap";
import Footer from '../Component/Footer/Footer.jsx'
import Navbar from '../Component/Navbar/Navbar.jsx'
import LandingPage from '../Pages/LandingPage.jsx'

export default function Home(){
    return (
        <div>
            <Navbar/>
          <LandingPage/>
          <Footer/>
        </div>
    )
}
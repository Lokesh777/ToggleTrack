
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../../Routes/AllRoutes';
import Login from '../../Routes/Login';
import Signup from '../../Routes/Signup';
import styles from './Navbar.module.css';

export default function Navbar(){
    const navigate= useNavigate()
    return(
        <> 
 <div className={styles.NavbarBorder}>
        <div className={styles.leftHeadings}> 
            <h1 className={styles.toggle} onClick={()=>navigate("/")}>toggl 
                 <span className={styles.track}>track</span> 
            </h1>

            <h4 className={styles.title}>Product</h4>
            <h4 className={styles.title}>Pricing</h4>
            <h4 className={styles.title}>Why Track?</h4>
            <h4 className={styles.title}>Careers</h4>
        </div>
  
        {/* <Routes>
                 <Route path="/signup" element={<Signup/>} />
                 <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                 <Route exact path="/" element={<Home/>} />
            </Routes> */}

        <div className={styles.rightHeading}>
            <h4 className={styles.demo_login_btn}>Book Demo</h4>
            <h3 className={styles.demo_login_btn}>|</h3>
            <h4 className={styles.demo_login_btn} onClick={()=>navigate("/login")}>Log in</h4>
           
           
            <button className={styles.tryFreeBtn}>Try for free</button>
        </div>
     
      
 </div></>
 
 )
}
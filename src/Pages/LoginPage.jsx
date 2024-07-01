import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import s from './LoginPage.module.css';
import logo_web from '/Users/selvarajandhanush/DOCS/ShipMantra/project/client/src/Images/Login/logo_web 5.svg';
import Group from '/Users/selvarajandhanush/DOCS/ShipMantra/project/client/src/Images/Login/Group 1000002776.svg';

const LoginPage = () => {
  return (
    <div className={s.box}>
        <div className={s.header}>

            <div className={s.top}>
                <img src={logo_web} alt="loading"/>
                <p className={s.para1}>NETWORK PORTAL</p> 
                <p className={s.para2}>Sign In</p>
            </div>
            
            <div className={s.mid}>
                <div className={s.mid_in}>
                    <form>
                        <label for="email">Email Address</label><br/>
                        <input className={s.input} type="email" id="email" name="email" placeholder="Enter email address"/><br/><br/>
                        <label className={s.pass}for="password">Password</label><br/>
                        <input className={s.input} type="password" id="password" name="password" placeholder="Enter password"/><br/><br/><br/>
                        <Link to="/homePage"><input className={s.btn} type="submit" value="Continue"/></Link>
                    </form>
                </div>
            </div>
            
            <div className={s.or}>
                <img className="or_img" src={Group} alt="loading"/>
            </div>
            
            <div className={s.bttom}>
               <button className={s.login_btn}>Login with OTP</button>
                <div>New User? <a  className="anchor" href="/">Sign Up</a></div>
            </div>
            
        </div>
        
        <div className={s.footer}>
            Learn how Shipmantra protects your <a href="/">Privacy</a>
        </div>

    </div>
  )
}

export default LoginPage;
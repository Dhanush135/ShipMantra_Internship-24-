import React from 'react';
import s from './ProfilePage.module.css';
import Navbar from '../components/Navbar';
import homeprofile from '../Images/ProfilePage/homeprofile.svg';
import deliveries from '../Images/ProfilePage/deliveries.svg';
import bookings from '../Images/ProfilePage/bookings.svg';
import ndr from '../Images/ProfilePage/ndr.svg';
import wallet from '../Images/ProfilePage/wallet.svg';
import setting from '../Images/ProfilePage/setting.svg';
import contact from '../Images/ProfilePage/contact.svg';
import support from '../Images/ProfilePage/support.svg';
import logout from '../Images/ProfilePage/logout.svg';

const ProfilePage = () => {
  return (
    <div>
        <Navbar />
        <div className={s.main}>

            <div className={s.box}>

                <div className={s.top}>
                    <img className={s.proimg} src={homeprofile} alt="" />

                    <div className={s.topin}>
                        <b>Srikanth Gadang</b>
                        <span className={s.mobile}>+91 9963659615</span>
                    </div>

                </div>

                <hr />

                <div className={s.botm}>
                    <div className={s.botmin}>
                        <img className={s.img} src={deliveries} alt="" />
                        <b className={s.text}>My Deliveries</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={bookings} alt="" />
                        <b className={s.text}>Bookings</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={ndr} alt="" />
                        <b className={s.text}>NDR</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={wallet} alt="" />
                        <b className={s.text}> My Wallet</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={setting} alt="" />
                        <b className={s.text}>Settings</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={contact} alt="" />
                        <b className={s.text}>Contact US</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={support} alt="" />
                        <b className={s.text}>Support US</b>
                    </div>
                    <div className={s.botmin}>
                        <img className={s.img} src={logout} alt="" />
                        <b className={s.text}>Logout US</b>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProfilePage
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import s from './HomePage.module.css';
import banner from '../Images/HomePage/banner.svg';
import booking from '../Images/HomePage/booking.svg';
import book from '../Images/HomePage/book.svg';
import delivery from '../Images/HomePage/delivery.svg';
import ndr from '../Images/HomePage/ndr.svg';
import agent from '../Images/HomePage/agent.svg';
import calc from '../Images/HomePage/calc.svg';
import recharge from '../Images/HomePage/recharge.svg';
import share from '../Images/HomePage/share.svg';
import refer from '../Images/HomePage/refer.svg';
import reward from '../Images/HomePage/rewards.svg';
import earning from '../Images/HomePage/earning.svg';
import homeprofile from '../Images/HomePage/homeprofile.svg';
import homescan from '../Images/HomePage/homescan.svg';
import homebell from '../Images/HomePage/homebell.svg';
import homeicon from '../Images/HomePage/homeicon.svg';
import ordericon from '../Images/HomePage/ordericon.svg';
import walleticon from '../Images/HomePage/walleticon.svg';
import profileicon from '../Images/HomePage/profileicon.svg';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <div className={s.main}>
            <div className={s.details}>
                <div className={s.left}>

                    <img className={s.proimg} src={homeprofile} alt="" />

                    <div className={s.leftin}>
                        <Link to="/profilePage" className={s.colony}>mvp colony</Link>
                        <b>Vishakapatnam</b>
                    </div>

                </div>

                <div className={s.right}>
                    <img className={s.scan} src={homescan} alt="" />
                    <img className={s.bell} src={homebell} alt="" />
                </div>
            </div>

            <img className={s.banner_img} src={banner} alt="" />

            <div className={s.box}>
                <div className={s.name}>
                    <p>Quick Actions</p>
                </div>

                <div className={s.box_in}>
                    <div className={s.item}><img className={s.image} src={booking} alt="alt" /></div>
                    <div className={s.item}><img className={s.image} src={delivery} alt="alt" /></div>
                    <div className={s.item}><img className={s.image} src={book} alt="alt" /></div>
                    <div className={s.item}><img className={s.image} src={ndr} alt="alt" /></div>
                </div>
            </div>

            <div className={s.box}>
                <div className={s.name}>
                    <p>Shortcuts</p>
                </div>

                <div className={s.box_in}>
                    <div className={s.item}><img className={s.image} src={agent} alt="alt" /></div>
                    <div className={s.item}><img className={s.image} src={calc} alt="alt" /></div>
                    <div className={s.item}><img className={s.image} src={share} alt="alt" /></div>
                    <div className={s.item}><img className={s.image} src={recharge} alt="alt" /></div>
                </div>
            </div>

            <div className={s.cont}>
                <div className={s.cont_in}><img className={s.image} src={refer} alt="" /></div>
                <div className={s.cont_in}><img className={s.image} src={reward} alt="" /></div>
                <div className={s.cont_in}><img className={s.image} src={earning} alt="" /></div>
            </div>

            <div className={s.action}>
                <div className={s.actin}>
                    <b>Action Required</b>
                    <span className={s.vilot}>View All</span>
                </div>
                <div className={s.actin}>
                    <div className={s.actin1}>
                        <b className={s.actin1in}>Order</b>
                        <span className={s.actin1in}>#837462</span>
                        <button className={s.newbtn}>New</button>
                    </div>
                    <span className={s.time}>NOV 14, 07:00 AM</span>
                </div>
                <div className={s.actin}>
                    <span className={s.time}>Vizag, Mvp colony</span>
                    <span className={s.pickup}>to pickup</span>
                </div>
            </div>

            <div className={s.toolbar}>
                <div className={s.toolitem}>
                    <img src={homeicon} alt="" />
                    <p className={s.toolp}>Home</p>
                </div>
                <div className={s.toolitem}>
                    <img src={ordericon} alt="" />
                    <Link to="/ordersPage" className={s.ord}><p className={s.toolp}>Orders</p></Link>
                </div>
                <div className={s.toolitem}>
                    <img src={walleticon} alt="" />
                    <p className={s.toolp}>Wallet</p>
                </div>
                <div className={s.toolitem}>
                    <img src={profileicon} alt="" />
                    <p className={s.toolp}>Profile</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomePage
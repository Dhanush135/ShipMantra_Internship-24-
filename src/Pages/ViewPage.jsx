import React from 'react';
import s from './ViewPage.module.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import newOrder from '../Images/ViewPage/newOrder.svg';
import orderStatus from '../Images/ViewPage/orderStatus.svg';
import arrow from '../Images/ViewPage/arrow.svg';

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleAssignForPickup = () => {
    navigate("/assignPage");
  };

  const handleReject = () => {
    navigate("/rejectPage");
  };

  return (
    <div>
      <Navbar />
      <div className={s.main}>

        <div className={s.topbar}>
          <Link to="/ordersPage"><img className={s.arrow} src={arrow} alt="" /></Link>
          <span><b className={s.toporder}>View Details</b></span>
          <div></div>
        </div>

        <div className={s.hr}></div>

        <div className={s.top}>
          <div className={s.top_top}>
            <b className={s.topid}>Order ID: #{id}</b>
            <img src={newOrder} alt="New Order" />
          </div>

          <hr className={s.hr} />

          <div className={s.top_mid}>
            Order ID
            <b>#{id}17732</b>
          </div>

          <div className={s.top_mid}>
            Order Date
            <b>9/26/23</b>
          </div>

          <div className={s.top_mid}>
            From
            <b>1111, CMR Shopping Mall, MG Road, PVR Square </b>
          </div>

          <div className={s.top_mid}>
            To
            <b>1111, CMR Central, Maddilapalem</b>
          </div>

          <div className={s.top_mid}>
            Package Weight
            <b>5 Kilograms</b>
          </div>

          <div className={s.top_mid}>
            Package Dimensions
            <b>10cm X 10cm X 10cm</b>
          </div>
        </div>

        <div className={s.top}>
          <div className={s.top_mid}>
            Consigner Name
            <b>Dhanush</b>
          </div>

          <div className={s.top_mid}>
            Phone Number
            <b>9390960604</b>
          </div>

          <div className={s.top_mid}>
            Location
            <button className={s.btn}>Show Map</button>
          </div>
        </div>

        <div className={s.top}>
          <div className={s.top_mid}>
            Details of Articles
          </div>

          <div className={s.top_mid}>
            <b>Article 1/3</b>
            <b>25 Kilograms</b>
          </div>

          <div className={s.top_mid}>
            <b>Article 1/3</b>
            <b>25 Kilograms</b>
          </div>

          <div className={s.top_mid}>
            <b>Article 1/3</b>
            <b>25 Kilograms</b>
          </div>
        </div>

        <div className={s.bottm}>
          <img className={s.image} src={orderStatus} alt="Loading" />
          <div className={s.bottm_btn}>
            <button className={s.btn1} onClick={handleAssignForPickup}>Assign for Pickup</button>
            <button className={s.btn2} onClick={handleReject}>Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;

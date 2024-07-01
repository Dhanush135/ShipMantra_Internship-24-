import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import s from './RejectPage.module.css';
import Navbar from '../components/Navbar.jsx';
import upload from '../Images/RejectPage/flowbite_upload-solid.svg';
import arrow from '../Images/RejectPage/arrow.svg';

const RejectPage = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [showTextArea, setShowTextArea] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setSelectedReason(value);
        setShowTextArea(value === 'Others');
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRejectClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Navbar />
            <div className={s.main}>

                <div className={s.topbar}>
                    <Link to="/ordersPage"><img className={s.arrow} src={arrow} alt="" /></Link>
                    <span><b className={s.toporder}>Order Rejection</b></span>
                    <div></div>
                </div>

                <div className={s.hr}></div>

                <p className={s.para}><b>Reason for rejection</b></p>
                <div className={s.box}>
                    <p className={s.para1}><b>Select Reason</b></p>
                    <div className={s.item}>
                        <input
                            className={s.radio}
                            type="radio"
                            name="reason"
                            value="Customer cancelled"
                            checked={selectedReason === 'Customer cancelled'}
                            onChange={handleReasonChange}
                        />
                        Customer cancelled
                    </div>
                    <div className={s.item}>
                        <input
                            className={s.radio}
                            type="radio"
                            name="reason"
                            value="Customer not reachable"
                            checked={selectedReason === 'Customer not reachable'}
                            onChange={handleReasonChange}
                        />
                        Customer not reachable
                    </div>
                    <div className={s.item}>
                        <input
                            className={s.radio}
                            type="radio"
                            name="reason"
                            value="Others"
                            checked={selectedReason === 'Others'}
                            onChange={handleReasonChange}
                        />
                        Others
                    </div>

                    {showTextArea && (
                        <div className={s.textAreaContainer}>
                            <textarea className={s.textArea} placeholder="Please specify the reason"></textarea>
                        </div>
                    )}
                </div>

                <div className={s.box1}>
                    <div className={s.box1in}>
                        Browse file from the device
                    </div>
                    <button className={s.btn}>
                        <label htmlFor="file-upload" className={s.fileLabel}>
                            <img src={upload} alt="upload" />
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className={s.fileInput}
                        />
                    </button>
                </div>

                {selectedFile && (
                    <div className={s.fileInfo}>
                        <p><b>Selected file:</b> {selectedFile.name}</p>
                    </div>
                )}

                <button className={s.rejectbtn} onClick={handleRejectClick}>
                    Reject Pickup
                </button>
            </div>

            {showModal && (
                <div className={s.modalOverlay}>
                    <div className={s.modal}>
                        <div className={s.modalContent}>
                            <h4>Pickup Rejected!</h4>
                            <p className={s.modaltext}>order has been rejected for pickup succesfully</p>
                            <Link to="/homePage">
                                <button className={s.modalButton} onClick={handleCloseModal}>
                                    Back to home
                                </button>
                            </Link>
                            {/* <button className={s.modalButton} onClick={handleCloseModal}>
                                Cancel
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RejectPage;

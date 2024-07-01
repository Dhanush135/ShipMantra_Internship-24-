import React, { useState } from "react";
import { Link } from 'react-router-dom';
import s from "./OrdersPage.module.css";
import call from "../Images/OrdersPage/call.svg";
import priority from '../Images/OrdersPage/priority.svg';
import loc from '../Images/OrdersPage/locatioin.svg';
import vector from '../Images/OrdersPage/Vector.svg';
import phone from '../Images/OrdersPage/phone_num.png';
import assignPickupImg from '../Images/OrdersPage/delivery_boy.svg';
import arrow from '../Images/OrdersPage/arrow.svg';
import Navbar from "../components/Navbar";

const Modal = ({ show, order, onClose, content }) => {
    if (!show) return null;

    return (
        <div className={s.modalOverlay}>
            <div className={s.modal}>
                {content === 'orderDetails' && (
                    <>
                        <h2>Order Details</h2>
                        <p>ID: {order.id}</p>
                        <p>From: {order.from}</p>
                        <p>To: {order.to}</p>
                        <img className={s.phoneNum} src={phone} alt="Call Option" />
                    </>
                )}
                {content === 'assignPickup' && (
                    <div className={s.accept}>
                        <h2>Assign Pickup</h2>
                        <img className={s.assignPickupImg} src={assignPickupImg} alt="Assign Pickup" />
                        <div className={s.modal_buttons}>
                            <Link to={`/viewPage/${order.id}`}><button className={s.modal_acc}>Assign for pickup</button></Link>
                            <button className={s.modal_rej} onClick={onClose}>Reject</button>
                        </div>
                    </div>
                )}
                {content === 'orderDetails' && (
                    <div className={s.modal_div}><button className={s.modal_btn} onClick={onClose}>Close</button></div>
                )}
            </div>
        </div>
    );
};

const OrdersPage = () => {
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [filter, setFilter] = useState("New");
    const [selectAll, setSelectAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [modalContent, setModalContent] = useState(null);
    const [priorityFilter, setPriorityFilter] = useState(false);

    const sample_data = [
        {
            id: 123456,
            from: "Vishakapatnam",
            to: "Hyderabad",
            type: "New",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: true,
            distance: true,
            btn: true
        },
        {
            id: 214356,
            from: "Vishakapatnam",
            to: "Chennai",
            type: "New",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: false,
            distance: true,
            btn: true
        },
        {
            id: 132457,
            from: "Vellore",
            to: "Hyderabad",
            type: "New",
            weight: "20",
            packages: "5",
            amount: "350",
            callOpiton: true,
            priority: true,
            distance: true,
            btn: true
        },
        {
            id: 289373,
            from: "Banglure",
            to: "Chennai",
            type: "New",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: true,
            distance: true,
            btn: true
        },
        {
            id: 503239,
            from: "Kerala",
            to: "Hyderabad",
            type: "New",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: false,
            distance: true,
            btn: true
        },
        {
            id: 396865,
            from: "Vizag",
            to: "Chennai",
            type: "Out",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: true,
            distance: true,
            btn: true
        },
        {
            id: 493029,
            from: "Chennai",
            to: "Mumbai",
            type: "Out",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: false,
            distance: true,
            btn: true
        },
        {
            id: 493028,
            from: "Bangalure",
            to: "Kocchi",
            type: "Out",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: false,
            distance: true,
            btn: true
        },
        {
            id: 539282,
            from: "Hyderabad",
            to: "Madurai",
            type: "Verify",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: true,
            distance: true,
            btn: true
        },
        {
            id: 154829,
            from: "Chennai",
            to: "Hyderabad",
            type: "Verify",
            weight: "30",
            packages: "3",
            amount: "350",
            callOpiton: true,
            priority: false,
            distance: true,
            btn: true
        }
    ];

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedOrders([]);
        } else {
            setSelectedOrders(filteredData.map((order) => order.id));
        }
        setSelectAll(!selectAll);
    };

    const handleOrderSelection = (id) => {
        if (selectedOrders.includes(id)) {
            setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
        } else {
            setSelectedOrders([...selectedOrders, id]);
        }
    };

    const handleCallOptionClick = (order) => {
        setSelectedOrder(order);
        setModalContent('orderDetails');
        setShowModal(true);
    };

    const handleAssignPickupClick = (order) => {
        setSelectedOrder(order);
        setModalContent('assignPickup');
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedOrder(null);
    };

    const countOrdersByType = (type) =>
        sample_data.filter((order) => order.type === type).length;

    const filteredData = sample_data
        .filter((order) => order.type === filter)
        .filter((order) => !priorityFilter || order.priority)
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });

    const handleSort = () => {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    const togglePriorityFilter = () => {
        setPriorityFilter((prevFilter) => !prevFilter);
    };

    return (
        <div>
            <Navbar />
            <div className={s.main}>

                <div className={s.topbar}>
                    <Link to="/homePage"><img className={s.arrow} src={arrow} alt="" /></Link>
                    <span><b className={s.toporder}>Orders</b></span>
                    <div></div>
                </div>

                <div className={s.hr}></div>

                <div className={s.top}>
                    <button 
                        className={filter === "New" ? s.selectedButton : s.top_btn} 
                        onClick={() => setFilter("New")}
                    >
                        New orders ({countOrdersByType("New")})
                    </button>
                    <button 
                        className={filter === "Out" ? s.selectedButton : s.top_btn} 
                        onClick={() => setFilter("Out")}
                    >
                        Out For Pickup ({countOrdersByType("Out")})
                    </button>
                    <button 
                        className={filter === "Verify" ? s.selectedButton : s.top_btn} 
                        onClick={() => setFilter("Verify")}
                    >
                        Verification ({countOrdersByType("Verify")})
                    </button>
                </div>

                <div className={s.search}>
                    <div>
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                        <label style={{ paddingLeft: "7px" }} className={s.selectall}>Select All</label>
                    </div>
                    <div>
                        <button className={s.btn_sort} onClick={togglePriorityFilter}>priority</button>
                        <button className={s.btn_sort} onClick={handleSort}>sort</button>
                    </div>
                </div>

                <div className={s.orders}>
                    {filteredData.map((order) => (
                        <div key={order.id} className={s.orderitem}>
                            <div className={s.checkb}>
                                <input
                                    className={s.checkbin}
                                    type="checkbox"
                                    checked={selectedOrders.includes(order.id)}
                                    onChange={() => handleOrderSelection(order.id)}
                                />
                                <b>ID : #{order.id}</b>
                            </div>
                            
                            <div className={s.fromto}>
                                <div className={s.fromtoin1}><b>{order.from} </b></div> 
                                <div className={s.fromtoin}><img className={s.arrow} src={vector} alt="img" /></div>
                                <div className={s.fromtoin2}><b>  {order.to}</b></div> 
                            </div>
                            <div className={s.weight}>
                                <div><b>Weight</b>: {order.weight}</div>
                                <span>|</span>
                                <div><b>Packages</b>: {order.packages}</div>
                                <span>|</span>
                                <div><b>Amount</b>: {order.amount}</div>
                            </div>

                            <div className={s.dotted}>

                            </div>
                            
                            <div className={s.bottm}>
                                <div className={s.bottm_item}>
                                    {order.callOpiton && (
                                        <img 
                                            className={s.bottm_img}
                                            src={call}
                                            alt="Call Option"
                                            onClick={() => handleCallOptionClick(order)}
                                        />
                                    )}
                                </div>
                                <div className={s.bottm_item}>
                                    {order.priority && <img className={s.bottm_img} src={priority} alt="Priority" />}
                                </div>
                                <div className={s.bottm_item}>
                                    {order.distance && <img className={s.bottm_img1} src={loc} alt="Distance" />}
                                </div>
                                <div className={s.bottm_item}> 
                                    {order.btn && (
                                        <button 
                                            className={s.bottm_btn} 
                                            onClick={() => handleAssignPickupClick(order)}
                                        >
                                            Assign Pickup
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedOrder && (
                    <Modal 
                        show={showModal} 
                        order={selectedOrder} 
                        onClose={closeModal} 
                        content={modalContent} 
                    />
                )}
            </div>
        </div>
    );
};

export default OrdersPage;

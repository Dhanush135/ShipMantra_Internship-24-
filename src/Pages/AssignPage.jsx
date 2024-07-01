import React, { useState } from 'react';
import s from './AssignPage.module.css';
import Navbar from '../components/Navbar';
import arrow from '../Images/AssignPage/arrow.svg'
import { Link } from 'react-router-dom';

const AssignPage = () => {
  const [selectedOption, setSelectedOption] = useState('ownFleet');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [thirdPartyName, setThirdPartyName] = useState('');

  const data = [
    { name: "Prashy", number: 8953493092 },
    { name: "Arjun", number: 9483927459 },
    { name: "Abinesh", number: 8476778392 },
    { name: "Akash", number: 7793749200 },
    { name: "Rohit", number: 9902993902 },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setExpandedIndex(null); // Reset expanded index when option changes
  };

  const handleRadioChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
  };

  const handleAssignPickup = (name) => {
    setModalMessage(`${name}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className={s.main}>

        <div className={s.topbar}>
          <Link to="/ordersPage"><img className={s.arrow} src={arrow} alt="" /></Link>
          <span><b className={s.toporder}>Assign Pickup</b></span>
          <div></div>
        </div>

        <div className={s.hr}></div>

        <div className={s.top}>
          <button
            className={selectedOption === 'ownFleet' ? s.btn1 : s.btn2}
            onClick={() => handleOptionChange('ownFleet')}
          >
            Agent Own Fleet
          </button>
          <button
            className={selectedOption === 'thirdParty' ? s.btn1 : s.btn2}
            onClick={() => handleOptionChange('thirdParty')}
          >
            Third Party Pickup
          </button>
        </div>

        {selectedOption === 'ownFleet' && (
          <div className={s.box}>
            {data.map((agent, index) => (
              <div key={index}>
                <div className={s.item}>
                  <b>{agent.name}</b>
                  <input
                    className={s.radio}
                    type="radio"
                    name="agent"
                    value={agent.name}
                    checked={expandedIndex === index}
                    onChange={() => handleRadioChange(index)}
                  />
                </div>
                {expandedIndex === index && (
                  <div className={s.expandedInfo}>
                    <b>Phone Number:</b> {agent.number}
                    <div className={s.btn_div}>
                      <button 
                        className={s.assignButton} 
                        onClick={() => handleAssignPickup(agent.name)}
                      >
                        Assign Pickup
                      </button>
                    </div>
                  </div>
                )}
                {index !== data.length - 1 && <hr />}
              </div>
            ))}
          </div>
        )}

        {selectedOption === 'thirdParty' && (
          <div className={s.form}>
            <label>
              Driver name:
            </label>
            <input 
              className={s.input} 
              type="text" 
              placeholder='Enter driver name' 
              name="thirdPartyName"
              onChange={(e) => setThirdPartyName(e.target.value)}
            />
            <label>
              Driver phone number:
            </label>
            <input 
              className={s.input} 
              type="text" 
              placeholder='Enter Phone Number' 
              name="thirdPartyNumber"
            />
            <div className={s.btn_div}>
              <button 
                className={s.submitButton}
                onClick={() => handleAssignPickup(thirdPartyName)}
              >
                Assign Pickup
              </button>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className={s.modalOverlay}>
            <div className={s.modal}>
              <p className={s.bold}>Pickup Confirmed!</p>
              <p className={s.modaltext}>Order has been assigned for pickup by</p>
              <p className={s.name}>{modalMessage}</p>
              <Link to="/homePage">
                <button className={s.closeButton} onClick={closeModal}>Back to home</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignPage;

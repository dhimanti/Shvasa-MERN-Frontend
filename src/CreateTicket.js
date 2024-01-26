import React, { useState } from 'react';
import './css/dropdown.css';
import img01 from './images/img-01.png';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState({
    topic: '',
    description: '',
    severity: '',
    type: '',
    status: '', // Default status is set to 'open'
  });

  const createSupportTicket = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      console.log("Sending support ticket:", newTicket);
  
      // const response = await fetch('http://localhost:5000/api/support-tickets', {
      // changing for vercel deployment
      const response = await fetch('https://mern-back-end-ebon.vercel.app/api/support-tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTicket),
      });
  
      console.log("Response status:", response.status);
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error creating Support Ticket:', errorMessage);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Support Ticket created:', data);
    } catch (error) {
      console.error('Error creating Support Ticket:', error.message);
    }
  };
  

  return (
    <div className="limiter">
      <div className="container-login100" style={{ background: 'linear-gradient(-135deg, #c850c0, #97512f' }}>
        <div className="container-login100-form-btn" style={{ marginTop: '20px', display: 'flex' }}>
          <button
            className="login100-form-btn"
            onClick={() => { window.location.href = '/'; }}
            style={{ margin: '10px', width: '25%' }}
          >
            Go to Home
          </button>

          <button
            className="login100-form-btn"
            onClick={() => { window.location.href = '/createAgent'; }}
            style={{ margin: '10px', width: '25%' }}
          >
            Create Support Agent
          </button>
        </div>
        <div className="wrap-login100" style={{ padding: '100px' }} >
          <div className="login100-pic js-tilt" data-tilt>
            <img src={img01} alt="IMG" />
          </div>
          <form className="login100-form validate-form" onSubmit={createSupportTicket}>
            <span className="login100-form-title">
              Support Ticket Creation
            </span>

            {/* Topic */}
            <div className="wrap-input100 validate-input" data-validate="Topic is required">
              <input onChange={(e) => setNewTicket({ ...newTicket, topic: e.target.value })} className="input100" type="text" name="topic" id="topic" placeholder="Topic" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-book" aria-hidden="true"></i>
              </span>
            </div>

            {/* Description */}
            <div className="wrap-input100 validate-input" data-validate="Description is required">
              <input onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })} className="input100" name="description" id="description" placeholder="Description" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-align-left" aria-hidden="true"></i>
              </span>
            </div>

            {/* Severity (Dropdown) */}
            <div className="wrap-input100 validate-input" data-validate="Severity is required">
              <div className="dropdown-wrapper">
                <select
                  onChange={(e) => setNewTicket((prevTicket) => ({ ...prevTicket, severity: e.target.value }))}
                  className="input100 dropdown"
                  name="severity"
                  id="severity"
                  value={newTicket.severity}
                >
                  <option value="" disabled>
                    Select Severity
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <span className="custom-arrow">&#9660;</span>
              </div>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
            </div>

            {/* Type */}
            <div className="wrap-input100 validate-input" data-validate="Type is required">
              <input onChange={(e) => setNewTicket({ ...newTicket, type: e.target.value })} className="input100" type="text" name="type" id="type" placeholder="Type" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-cogs" aria-hidden="true"></i>
              </span>
            </div>

            {/* Status (Dropdown) */}
            <div className="wrap-input100 validate-input" data-validate="Status is required">
              <div className="dropdown-wrapper">
                <select
                  onChange={(e) => setNewTicket((prevTicket) => ({ ...prevTicket, status: e.target.value }))}
                  className="input100 dropdown"
                  name="status"
                  id="status"
                  value={newTicket.status}
                >
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Resolved">Resolved</option>
                </select>
                <span className="custom-arrow">&#9660;</span>
              </div>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Create Support Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

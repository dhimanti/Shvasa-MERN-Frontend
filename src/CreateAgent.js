import React, { useState } from 'react';
import img01 from './images/img-01.png';

const CreateAgent = () => {

  const [newSupportAgent, setNewSupportAgent] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const createSupportAgent = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      console.log("Sending support ticket:", newSupportAgent);
  
      // const response = await fetch('http://localhost:5000/api/support-agents', {
      // changing for vercel deployment
      const response = await fetch('https://mern-back-end-ebon.vercel.app/api/support-agents', {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSupportAgent),
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
      
      <div className="container-login100"  style={{background:'linear-gradient(-135deg, #50c863c7, #4158d0,#9053c7)'}} >
        <div className="container-login100-form-btn" style={{ marginTop: '20px', display: 'flex' }}>
          <button
            className="login100-form-btn"
            onClick={() => { window.location.href = '/'; }}
            style={{ margin: '10px', width:'25%' }}
          >
            Go to Home
          </button>

          <button
            className="login100-form-btn"
            onClick={() => { window.location.href = '/createTicket'; }}
            style={{ margin: '10px' , width:'25%' }}
          >
            Create Support Ticket
          </button>
        </div>
        
        <div className="wrap-login100" style={{ padding: '100px',marginTop: '0px' }} >
        


          <div className="login100-pic js-tilt" data-tilt>
            <img src={img01} alt="IMG" />
          </div>
          <form className="login100-form validate-form">
              <span className="login100-form-title">
                Support Agent Creation
              </span>

              {/* <!-- Name --> */}
              <div className="wrap-input100 validate-input" data-validate="Name is required">
                  <input onChange={(e) => setNewSupportAgent({ ...newSupportAgent, name: e.target.value })} className="input100" type="text" name="name" id="name" placeholder="Name" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                      <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
              </div>

              {/* <!-- Email --> */}
              <div onChange={(e) => setNewSupportAgent({ ...newSupportAgent, email: e.target.value })} className="wrap-input100 validate-input" data-validate="Email is required">
                  <input className="input100" type="email" name="email" id="email" placeholder="Email" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
              </div>

              {/* <!-- Phone --> */}
              <div onChange={(e) => setNewSupportAgent({ ...newSupportAgent, phone: e.target.value })} className="wrap-input100 validate-input" data-validate="Phone is required">
                  <input className="input100" type="tel" name="phone" id="phone" placeholder="Phone" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
              </div>

              {/* <!-- Description --> */}
              <div onChange={(e) => setNewSupportAgent({ ...newSupportAgent, description: e.target.value })} className="wrap-input100 validate-input" data-validate="Description is required">
                  <input className="input100" name="description" id="description" placeholder="Description" style={{height: '80px'}}/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                      <i className="fa fa-file-text" aria-hidden="true"></i>
                  </span>
              </div>

              <div className="container-login100-form-btn">
                  <button onClick={createSupportAgent} className="login100-form-btn">
                    Create Support Ticket
                  </button>
              </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default CreateAgent;

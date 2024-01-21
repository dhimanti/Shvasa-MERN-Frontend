import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/select2/select2.min.css';
import './css/util.css';
import './css/main.css';
import img01 from './images/img-01.png';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const createNewAgent = () => {
    navigate('/createAgent');
  };

  const createNewTicket = () => {
    navigate('/createTicket');
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100" style={{ padding: '130px' }} >
          <div className="login100-pic js-tilt" data-tilt>
            <img src={img01} alt="IMG" />
          </div>
          <div className="login100-pic js-tilt" data-tilt>
            <span className="login100-form-title">What is your action???</span>
            <div className="wrap-input100 validate-input">
              <button className="input100" type="button" onClick={createNewAgent}>
                Create New Agent
              </button>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input100 validate-input">
              <button className="input100" type="button" onClick={createNewTicket}>
                Create New Ticket
              </button>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-ticket" aria-hidden="true"></i>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;

import React, {useState} from 'react';
import './Widget.css';
import RenmoneyLogo from '../img/renmoney-logo.svg';
import Stepper from './Stepper';
import { Button } from 'antd';



export default function Widget() {
    
    const [openModal, setOpenModal] = useState(true);
    const [onboardingStart, setOnBoardingStart] = useState(false)


    return (
      <>
        <button
          style={{ background: "#F15822", border: "none", color: "#fff" }}
          type="button"
          class="btn text-white"
          onClick={() => setOpenModal(true)}
        >
          Pay with Renmoney
        </button>

        <div className={openModal ? `show-widget` : `hide-widget`}>
          <div className="show-widget-content">
            <div>
              <img className="mb-2" src={RenmoneyLogo} alt="renmoney logo" />
              <h5>Welcome to the payment section</h5>
            </div>

            {onboardingStart ? (
              <Stepper />
            ) : (
              <span className="onboarding-button">
                <Button
                    style={{ background: "#F15822", border: "#F15822" }}
                    type="primary"
                    block
                    onClick={() => setOnBoardingStart(true)}
                >
                  Continue to onboarding
                </Button>
              </span>
            )}

            {/* <div className=""></div> */}
          </div>
        </div>
      </>
    );
}

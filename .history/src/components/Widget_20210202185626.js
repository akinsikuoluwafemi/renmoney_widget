import React, {useState} from 'react';
import './Widget.css';
import RenmoneyLogo from '../img/renmoney-logo.svg';




export default function Widget() {
    
    const [openModal, closeModal] = useState(false);
    


    return (
      <>
        <button
          style={{ background: "#F15822", border: "none", color: "#fff" }}
          type="button"
                class="btn text-white"
                
        >
                Pay with Renmoney
        </button>
            

        <div className="show-widget">
                <div className="show-widget-content">
                    <img src={ RenmoneyLogo} alt="renmoney logo"/>
                </div>
        </div>

        

        
      </>
    );
}

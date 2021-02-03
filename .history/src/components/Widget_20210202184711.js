import React from 'react';
import './Widget.css';
import RenmoneyLogo from '../img/renmoney'




export default function Widget() {
    return (
      <>
        <button
          style={{ background: "#F15822", border: "none", color: "#fff" }}
          type="button"
          class="btn text-white"
          data-toggle="modal"
          data-target="#exampleModal"
        >
                Pay with Renmoney
        </button>
            

        <div className="show-widget">
                <div className="show-widget-content">
                    <p>yes</p>
                </div>
        </div>

        

        
      </>
    );
}
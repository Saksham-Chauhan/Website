import React, { useState } from "react";
import { logo, mobileLogo } from "../../assets/images";
import { ModalWrapper } from "../modal-wrapper/ModalWrapper";
import { SnoofForm } from "../snoof-form/SnoofForm";
import "./style.scss";

export const Navbar = () => {
  const [toogleModal, setToogleModal] = useState(false);
  const closePopup = () => {
    setToogleModal(false);
  };
  return (
    <div className="navbar">
      <div className="logo-sec">
        <img src={logo} alt="logo" className="main-logo" />
        <img src={mobileLogo} alt="logo" className="mobile-logo" />
      </div>
      <div className="mid-btn">
        <button>Pricing</button>
        <button>Blog</button>
        <button>Portfolio</button>
      </div>
      <div className="right-btn">
        <button>Join Discord</button>
        <button onClick={() => setToogleModal(!toogleModal)}>
          Get Started
        </button>
        {toogleModal && (
          <ModalWrapper {...{ closePopup }}>
            <SnoofForm />
          </ModalWrapper>
        )}
      </div>
    </div>
  );
};

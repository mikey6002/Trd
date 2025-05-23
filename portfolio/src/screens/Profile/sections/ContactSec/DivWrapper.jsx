import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="container-20">
        <div className="heading-4">
          <p className="let-s-get-to-know" id = "lets get to know">Let's get to know each other.</p>
        </div>
      </div>
    
      <div className="container-20">
        <div className="heading-4">
           <p className="let-s-get-to-know" id = "Get in touch">Get in Touch.</p>
        </div>
      </div>
    </div>
  );
};

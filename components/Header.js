// components/Header.js
import Link from 'next/link'
import Image from 'next/image'
import React from "react";

  const Header = () => (
    <div className="Header container">
      <div className="row">
          <div className="col-md-8">
               <div className="header__logo">
                    <img src="/images/logo.jpg" alt="Vercel Logo" className="brandlogo"/>
               </div> 
          </div>
          <div className="col-md-4">
          
          </div>

      </div>
    </div>
  );
  
  export default Header;
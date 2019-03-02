import React from 'react';
import '../App.css'

function Navbar({ showDialog }) {
  return (
    <div className="navbar-container">
      <div className="logo">
        <div className="logo-image">
          <img src={`https://firebasestorage.googleapis.com/v0/b/portfolio-aa291.appspot.com/o/act_real_estate_logo.png?alt=media&token=4452eeb1-1cd0-46b8-9a91-6ef6e1a425b1`} alt="logo" />
        </div>
        <div className="logo-text"> ACT Real Estate</div>
      </div>
      <div className="account">
        <i onClick={() => showDialog()} className="material-icons add-icon">add</i>
      </div>

    </div>
  );
}

export default Navbar
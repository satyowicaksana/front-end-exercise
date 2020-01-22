import React from 'react';
import './Hero.scss'

export default () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <img className="logo" src={require('../assets/logo.png')} alt="logo"></img>
          <div className="content">
            <h1>Hello! I'm Satyo Wicaksana</h1>
            <h2>Consult, Design, and Develop Websites</h2>
            <h3>
              Have something great in mind? Feel free to contact me.<br />
              I'll help you to make it happen.
            </h3>
            <button>
              LET'S MAKE CONTACT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
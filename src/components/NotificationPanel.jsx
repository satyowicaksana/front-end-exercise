import React from 'react';
import './NotificationPanel.scss'

export default () => {
  return (
    <>
      <div className="notification-panel">
        <div className="content">
          <p className="info">
            By accessing and using this website, you acknowledge that you have read and understand our 
            <a href="cookie-policy">&nbsp;Cookie Policy</a>,
            <a href="privacy-policy">&nbsp;Privacy Policy</a>, and our
            <a href="tos">&nbsp;Terms of Service</a>.
          </p>
          <button className="button">
            Got it
          </button>
        </div>
      </div>
    </>
  )
}
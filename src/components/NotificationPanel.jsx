import React, { useState } from 'react';
import './NotificationPanel.scss'

export default () => {
  const [hide, setHide] = useState(false)

  return (
    <>
      <div id="notification-panel" className={hide ? 'hide' : ''}>
        <div className="content">
          <p className="info">
            By accessing and using this website, you acknowledge that you have read and understand our 
            <a href="cookie-policy">&nbsp;Cookie Policy</a>,
            <a href="privacy-policy">&nbsp;Privacy Policy</a>, and our
            <a href="tos">&nbsp;Terms of Service</a>.
          </p>
          <button onClick={() => setHide(true)} className="button">
            Got it
          </button>
        </div>
      </div>
    </>
  )
}
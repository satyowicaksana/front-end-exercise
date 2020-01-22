import React from 'react'
import './NotificationPanel.scss'
import SlideToggle from 'react-slide-toggle'

export default () => {

  return (
    <>
      <SlideToggle
        render={({ toggle, setCollapsibleElement }) => (
          <div id="notification-panel" ref={setCollapsibleElement}>
            <div className="content">
              <p className="info">
                By accessing and using this website, you acknowledge that you have read and understand our 
                <a href="cookie-policy">&nbsp;Cookie Policy</a>,
                <a href="privacy-policy">&nbsp;Privacy Policy</a>, and our
                <a href="tos">&nbsp;Terms of Service</a>.
              </p>
              <button onClick={toggle} className="button">
                Got it
              </button>
            </div>
          </div>
        )}
      />
    </>
  )
}
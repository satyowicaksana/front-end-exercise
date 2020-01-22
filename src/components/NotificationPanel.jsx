import React, { useState } from 'react'
import './NotificationPanel.scss'
import SlideToggle from 'react-slide-toggle'

export default () => {
  const [toggleEvent, setToggleEvent] = useState(0)

  const onToggle = () => {
    setToggleEvent(Date.now());
  };

  return (
    <>
      <SlideToggle toggleEvent={toggleEvent}>
        {({ setCollapsibleElement }) => (
          <div ref={setCollapsibleElement} id="notification-panel">
            <div className="content">
              <p className="info">
                By accessing and using this website, you acknowledge that you have read and understand our 
                <a href="cookie-policy">&nbsp;Cookie Policy</a>,
                <a href="privacy-policy">&nbsp;Privacy Policy</a>, and our
                <a href="tos">&nbsp;Terms of Service</a>.
              </p>
              <button onClick={onToggle} className="button">
                Got it
              </button>
            </div>
          </div>
        )}
      </SlideToggle>
      <SlideToggle toggleEvent={toggleEvent}>
        {({ setCollapsibleElement }) => (
          <div ref={setCollapsibleElement} id="notification-panel-not-fixed">
            <div className="content">
              <p className="info">
                By accessing and using this website, you acknowledge that you have read and understand our 
                <a href="cookie-policy">&nbsp;Cookie Policy</a>,
                <a href="privacy-policy">&nbsp;Privacy Policy</a>, and our
                <a href="tos">&nbsp;Terms of Service</a>.
              </p>
              <button onClick={onToggle} className="button">
                Got it
              </button>
            </div>
          </div>
        )}
      </SlideToggle>
    </>
  )
}
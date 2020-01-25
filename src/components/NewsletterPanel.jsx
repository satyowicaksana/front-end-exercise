import React, { useState, useEffect } from 'react'
import './NewsletterPanel.scss'
import SlideToggle from 'react-slide-toggle'
import { MdClose } from 'react-icons/md'

export default () => {
  const [toggleEvent, setToggleEvent] = useState(0)
  const [showed, setShowed] = useState(false)
  const [pageHeight, setPageHeight] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)

  const handleScroll = e => {
    setScrollPosition(window.pageYOffset || document.documentElement.scrollTop)
  }

  const handleClose = () => {
    setShowed(false)
    setToggleEvent(Date.now())
    localStorage.setItem('newsPannelClosed', new Date())
  }

  const hidden = () => {
    if(!localStorage.getItem('newsPannelClosed')) {
      return false
    }
    let closedTime = localStorage.getItem('newsPannelClosed')
    let diffMs = new Date(closedTime) - new Date()
    let diffMins = Math.abs(Math.round(((diffMs % 86400000) % 3600000) / 60000))
    return diffMins < 10
  }

  useEffect(() => {
    let body = document.body,
    html = document.documentElement
    let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    setPageHeight(height)
    window.addEventListener('scroll', handleScroll, { passive: true })
  }, [])

  useEffect(() => {
    let lastOneThird = Math.floor(pageHeight / 3)
    if(window.pageYOffset > lastOneThird && !showed) {
      if(!hidden()) {
        setToggleEvent(Date.now())
        setShowed(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition, pageHeight])

  return (
    <>
      <SlideToggle
       toggleEvent={toggleEvent}
       collapsed
       >
        {({ setCollapsibleElement }) => (
          <>
          <div ref={setCollapsibleElement} className="newsletter">
            <div className="container">
            <MdClose onClick={handleClose} className="close-icon" />
            <h2>Get latest updates in web technologies</h2>
            <p>
              I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.
            </p>
            <div className="sign-up-form">
              <input className="input-email" type="text" placeholder="Email address"></input>
              <button>Count me in!</button>
            </div>
            </div>
          </div>
          </>
        )}
      </SlideToggle>
    </>
  )
}
import React, { useState, useEffect } from 'react'
import './NewsletterPanel.scss'
import SlideToggle from 'react-slide-toggle'
import { MdClose } from 'react-icons/md'

export default () => {
  const [toggleEvent, setToggleEvent] = useState(0)
  const [show, setShow] = useState(false)
  const [pageHeight, setPageHeight] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)

  const handleScroll = e => {
    setScrollPosition(window.pageYOffset || document.documentElement.scrollTop)
  }

  const handleClose = () => {
    setToggleEvent(Date.now())
    setTimeout(() => {
      setShow(false)
    }, (1000 * 60 * 10))
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
    if(window.pageYOffset > lastOneThird && !show) {
      setToggleEvent(Date.now())
      setShow(true)
    }
  }, [scrollPosition, show, pageHeight])


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
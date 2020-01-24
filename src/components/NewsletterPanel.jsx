import React, { useState, useEffect } from 'react'
import './NewsletterPanel.scss'
import SlideToggle from 'react-slide-toggle'

export default () => {
  const [toggleEvent, setToggleEvent] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)

  const onToggle = () => {
    setToggleEvent(Date.now());
  }
  
  const handleScroll = e => {
    console.log('gas')
    setScrollPosition(window.pageYOffset || document.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }, [])

  return (
    <>
      <SlideToggle
       toggleEvent={toggleEvent}
       collapsed
       >
        {({ setCollapsibleElement }) => (
          <>
          <div className="newsletter">
          <button onClick={onToggle} className="button">
            Got it
          </button>
            <h2>Get latest updates in web technologies</h2>
            <p  ref={setCollapsibleElement} >
              {scrollPosition}
              I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.
            </p>
          </div>
          </>
        )}
      </SlideToggle>
    </>
  )
}
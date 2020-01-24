import React from 'react';
import NotificationPanel from '../components/NotificationPanel'
import Hero from '../components/Hero'
import Highlight from '../components/Highlight'
import Footer from '../components/Footer'
import Newsletter from '../components/NewsletterPanel'

export default () => {
  return (
    <>
      <NotificationPanel />
      <Hero />
      <Highlight />
      <Footer />
      <Newsletter />
    </>
  )
}
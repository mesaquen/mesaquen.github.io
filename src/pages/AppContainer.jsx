import React from 'react'
import useI18n from '../hooks/useI18n'
import Bio from './Bio'
import Contact from './Contact'
import Profile from './Profile'
import Projects from './Projects'

const AppContainer = (props) => {
  const { __ } = useI18n()
  return (
    <div {...props}>
      <Bio />
      <Profile />
      <Projects />
      <Contact />
    </div>
  )
}

export default AppContainer

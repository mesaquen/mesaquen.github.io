import React from 'react'
import Bio from './Bio'
import Contact from './Contact'
import Profile from './Profile'
import Projects from './Projects'

const AppContainer = (props) => {
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

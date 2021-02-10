import React from 'react'
import { useTheme } from 'styled-components'
import { Container } from './PageStyles'

const Projects = () => {
  const theme = useTheme()
  return (
    <Container backgroundColor={theme.color.darkBackground}>Projects</Container>
  )
}

export default Projects

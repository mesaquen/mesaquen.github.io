import React from 'react'
import { Card, CardHeader } from './styles'
import Typo, { Subtitle } from 'components/Typo'
import { FaGithub } from 'react-icons/fa'
import Link from 'components/Link'

import styled from 'styled-components'

const Icon = styled(FaGithub)`
  margin-top: 1rem;
`
const ProjectCard = ({ name, html_url }) => {
  return (
    <Link href={html_url} target="_blank" >
    <Card justifyContent="space-between">
      <CardHeader>
        <Subtitle>{name}</Subtitle>
      </CardHeader>
      <Icon />
    </Card>
    </Link>
  )
}

export default ProjectCard

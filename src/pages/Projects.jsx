import React, { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { observer } from 'mobx-react-lite'
import Flex from 'components/Flex'
import ProjectCard from 'components/ProjectCard'
import ProjectsStore from 'mobx/ProjectsStore'
import { fetchUserRepos } from 'logic/UserLogic'
import { CardGrid } from './PageStyles'
import { Subtitle } from 'components/Typo'
import useI18n from 'hooks/useI18n'
const Text = styled(Subtitle)`
  margin-bottom: ${({ theme }) => theme.spacing.default};
`

const Projects = observer(() => {
  const { latestProjects, lastFetched } = ProjectsStore
  const { __ } = useI18n()

  useEffect(() => {
    fetchUserRepos('mesaquen').then((repos) => {
      ProjectsStore.setProjects(repos)
      ProjectsStore.setLastFetched(new Date())
    })
  }, [])

  const renderItem = (item) => <ProjectCard key={item.id} {...item} />

  return (
    <Flex>
      <Text>{__('recent.projects')}</Text>
      <CardGrid>{latestProjects.map(renderItem)}</CardGrid>
    </Flex>
  )
})

export default Projects

import React, { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { observer } from 'mobx-react-lite'
import Flex from 'components/Flex'
import ProjectCard from 'components/ProjectCard'
import ProjectsStore from 'mobx/ProjectsStore'
import { fetchUserRepos } from 'logic/UserLogic'
import {CardGrid} from './PageStyles'

const Projects = observer(() => {
  const { latestProjects, lastFetched } = ProjectsStore
  const theme = useTheme()

  useEffect(() => {
    fetchUserRepos('mesaquen').then(repos => {
      ProjectsStore.setProjects(repos)
      ProjectsStore.setLastFetched(new Date())
    })
  }, [])


const renderItem = (item) => (<ProjectCard key={item.id} {...item}/>)

  return <CardGrid>
    {latestProjects.map(renderItem)}
  </CardGrid>
})

export default Projects

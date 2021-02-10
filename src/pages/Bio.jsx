import React from 'react'
import Typo, { Title } from '../components/Typo'
import useI18n from '../hooks/useI18n'
import { getExperience } from '../utils/dateUtil'
import { Container } from './PageStyles'

const Bio = () => {
  const { __ } = useI18n()
  const count = getExperience()
  return (
    <Container backgroundColor="#111" direction="row" minHeight="30rem">
      <Container justifyContent="center" width="40rem" >
        <Title>{__('greeting')}</Title>
        <Typo>{__('greeting.bio', { count })}</Typo>
      </Container>
      <Container
        grow={1}
        justifyContent="center"
        alignItems="center"
      >
        sample test of it
      </Container>
    </Container>
  )
}

export default Bio

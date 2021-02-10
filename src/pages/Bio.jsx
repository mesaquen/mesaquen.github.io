import React from 'react'
import styled, { useTheme } from 'styled-components'
import Avatar from '../components/Avatar'
import Typo, { Title as TitleComponent } from '../components/Typo'
import useI18n from '../hooks/useI18n'
import { getExperience } from '../utils/dateUtil'
import { Container } from './PageStyles'

const Title = styled(TitleComponent)`
  width: fit-content;
`

const Text = styled(Typo)`
  margin-top: ${({ theme }) => theme.spacing.medium};
`

const Bio = () => {
  const { __ } = useI18n()
  const theme = useTheme()
  const count = getExperience()
  return (
    <Container
      backgroundColor={theme.color.darkBackground}
      direction="row"
      minHeight="30rem"
    >
      <Container justifyContent="center" width="40rem">
        <Title>{__('greeting')}</Title>
        <Text>{__('greeting.bio', { count })}</Text>
      </Container>
      <Container
        grow={1}
        shrink={0}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar username="mesaquen" />
      </Container>
    </Container>
  )
}

export default Bio

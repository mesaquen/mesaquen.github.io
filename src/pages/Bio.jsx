import React from 'react'
import styled, { useTheme } from 'styled-components'
import Avatar from 'components/Avatar'
import Flex from 'components/Flex'
import Typo, { Title as TitleComponent } from 'components/Typo'
import useI18n from '../hooks/useI18n'
import { getExperience } from '../utils/dateUtil'

const Container = styled(Flex)`
  align-items: center;
  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    min-height: 30rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`

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
    <Flex backgroundColor={theme.color.darkBackground}>
      <Container>
        <Flex maxWidth="30rem">
          <Title>{__('greeting')}</Title>
          <Text>{__('greeting.bio', { count })}</Text>
        </Flex>
        <Flex>
          <Avatar username="mesaquen" />
        </Flex>
      </Container>
    </Flex>
  )
}

export default Bio

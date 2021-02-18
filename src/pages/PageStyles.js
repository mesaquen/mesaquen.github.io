import styled from 'styled-components'
import Flex from '../components/Flex'
import { prepareRules } from '../utils/styleUtil'

const rules = prepareRules({
  color: 'color',
})

export const Container = styled(Flex)`
  min-height: 30rem;
`
export const ProfileCodeText = styled.span`
  font-size: ${({ theme }) => theme.sizes.XL};
  color: white;
  font-weight: bold;
  font-family: monospace;
  ${rules}
`

export const CardGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 1rem;

  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

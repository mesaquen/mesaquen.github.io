import styled from 'styled-components'
import { prepareRules } from '../utils/styleUtil'

const rules = prepareRules({
  color: 'color',
})

export const ProfileCodeText = styled.span`
  font-size: ${({ theme }) => theme.sizes.L};
  color: white;
  font-weight: bold;
  font-family: monospace;

  ${rules}
  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.sizes.XL};
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

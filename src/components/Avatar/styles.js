import styled from 'styled-components'
import Flex from '../Flex'

export const CircleContainer = styled(Flex)`
  padding: 0;
  background: ${({ theme }) => theme.color.background};
  border-radius: 50%;
  overflow: hidden;

  width: 50vw;
  height: 50vw;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 15rem;
    height: 15rem;
  }

  margin-bottom: ${({ theme }) => theme.spacing.default};
`

export const InputPlaceholder = styled(Flex)`
  margin-top: ${({ theme }) => theme.spacing.default};
  width: 15rem;
  background: ${({ theme }) => theme.color.background};
`

export const Image = styled.img`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 50vw;
  height: 50vw;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 15rem;
    height: 15rem;
  }
`

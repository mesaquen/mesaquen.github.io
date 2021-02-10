import styled from 'styled-components'
import Flex from '../Flex'

export const CircleContainer = styled(Flex)`
  padding: 0;
  width: 15rem;
  height: 15rem;
  background: ${({ theme }) => theme.color.background};
  border-radius: 50%;
  overflow: hidden;
`

export const InputPlaceholder = styled(Flex)`
  margin-top: ${({ theme }) => theme.spacing.default};
  width: 15rem;
  background: ${({ theme }) => theme.color.background};
`

export const Image = styled.img`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 15rem;
  height: 15rem;
`

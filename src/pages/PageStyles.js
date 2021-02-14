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
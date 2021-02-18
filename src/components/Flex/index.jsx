import styled from 'styled-components'
import { prepareRules } from '../../utils/styleUtil'

const rules = prepareRules({
  display: 'display',
  width: 'width',
  maxWidth: 'max-width',
  minHeight: 'min-height',
  justifyContent: 'justify-content',
  alignItems: 'align-items',
  backgroundColor: 'background-color',
  direction: 'flex-direction',
  shrink: 'flex-shrink',
  grow: 'flex-grow',
})

const Flex = styled.div`
  padding: ${(props) => props.theme.spacing.default};
  ${rules}
`

Flex.defaultProps = {
  direction: 'column',
  display: 'flex',
}

export default Flex

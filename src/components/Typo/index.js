import styled from 'styled-components'
import { prepareRules } from '../../utils/styleUtil'

const rules = prepareRules({
  size: 'font-size',
})
export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizes.XL};
  ${rules}
`

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.sizes.L};
  ${rules}
`

const Typo = styled.p`
  color: ${(props) => props.theme.color.secondaryTextIcons};
  ${rules}
`

export default Typo

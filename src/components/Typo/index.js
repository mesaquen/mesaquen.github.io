import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizes.XL};
`

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.sizes.L};
`

const Typo = styled.p`
color: ${props => props.theme.color.secondaryTextIcons}
`

export default Typo


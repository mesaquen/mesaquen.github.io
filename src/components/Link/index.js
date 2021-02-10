import styled from 'styled-components'

const Link = styled.a`
color: color: ${({ theme }) => theme.color.secondaryTextIcons};
  &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.accent};
      text-decoration: underline;
  }
`

export default Link

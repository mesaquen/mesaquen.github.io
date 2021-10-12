import styled from 'styled-components'

const Link = styled.a`
  color: ${({ theme }) => theme.color.primaryText};
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.accent};
    text-decoration: underline;
  }
`

export default Link

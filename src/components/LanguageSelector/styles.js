import styled from 'styled-components'

export const Button = styled.button`
  padding: ${({ theme }) => theme.sizing(0.5)};
  border: none;
  outline: none;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.color.accent : 'transparent'};
  color: ${({ active, theme }) => (active ? theme.color.background : 'white')};
  transition: all 0.2s;
`

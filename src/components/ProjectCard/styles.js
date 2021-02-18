import styled from 'styled-components'
import Flex from 'components/Flex'
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.background};
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.color.shadow};
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  justify-content: space-between;
  min-height: 8rem;
`
export const CardHeader = styled(Flex)`
  padding: 0;
`

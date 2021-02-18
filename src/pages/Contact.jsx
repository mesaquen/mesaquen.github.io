import React from 'react'
import styled, { useTheme } from 'styled-components'
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa'
import Flex from 'components/Flex'
import LinkComponent from 'components/Link'
import { PROFILES_LINKS } from 'Constants'

const Link = styled(LinkComponent)`
  ${({ theme, spaceAround }) =>
    spaceAround ? `padding: 0 ${theme.spacing.default};` : ''}
`

const Contact = () => {
  const theme = useTheme()
  const iconSize = theme.sizing(4)
  return (
    <Flex
      backgroundColor={theme.color.darkBackground}
      direction="row"
      justifyContent="center"
    >
      <Link href={PROFILES_LINKS.LINKED_IN} target="_blank">
        <FaLinkedin size={iconSize} />
      </Link>

      <Link href={PROFILES_LINKS.DEV} target="_blank" spaceAround>
        <FaDev size={iconSize} />
      </Link>

      <Link href={PROFILES_LINKS.GITHUB} target="_blank">
        <FaGithub size={iconSize} />
      </Link>
    </Flex>
  )
}

export default Contact

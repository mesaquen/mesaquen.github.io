import React from 'react'
import Flex from '../components/Flex'
import useTypingMachine from '../hooks/useTypingMachine'
import useI18n from '../hooks/useI18n'

import { ProfileCodeText as Typo } from './PageStyles'
import Text from '../components/Typo'
import { useTheme } from 'styled-components'

const HEART = String.fromCharCode(10084)

const Profile = () => {
  const theme = useTheme()
  const { __ } = useI18n()

  const words = [
    __('react', { defaultMessage: 'React' }),
    __('learning'),
    __('react.native', { defaultMessage: 'React Native' }),
    __('pizza', { defaultMessage: 'Pizza' }),
    __('no.sql', { defaultMessage: 'NoSQL' }),
    __('js', { defaultMessage: 'ECMAScript' }),
    __('frontend', { defaultMessage: 'Frontend' }),
    __('sharing'),
    __('testing'),
    __('developing'),
    __('sql', { defaultMessage: 'SQL' }),
  ]
  const value = useTypingMachine(words)
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="row"
      backgroundColor={theme.color.accent}
    >
      <Typo color={theme.color.background}>{`I ${HEART} { ${value} }`}</Typo>
    </Flex>
  )
}

export default Profile

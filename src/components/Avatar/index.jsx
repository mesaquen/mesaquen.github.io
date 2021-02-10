import React, { useEffect, useState } from 'react'
import Flex from '../Flex'
import { Subtitle as Typo } from '../Typo'
import { CircleContainer, InputPlaceholder, Image } from './styles'
import Link from '../Link'
import { fetchUser } from '../../logic/UserLogic'
import logger from '../../utils/logger'

const Avatar = ({ username, ...props }) => {
  const [loading, setLoading] = useState(true)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetchUser(username)
      .then((user) => {
        setImageUrl(user?.avatar_url)
      })
      .catch(logger.error)
  }, [username])

  return (
    <Flex alignItems="center">
      <CircleContainer>
        <Image
          src={imageUrl}
          onLoad={() => setTimeout(() => setLoading(false), 1000)}
          show={!loading}
        />
      </CircleContainer>
      {loading ? (
        <InputPlaceholder />
      ) : (
        <Link>
          <Typo>{`@${username}`}</Typo>
        </Link>
      )}
    </Flex>
  )
}

export default Avatar

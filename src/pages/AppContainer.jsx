import React from 'react'
import useI18n from '../hooks/useI18n'

const AppContainer = (props) => {
  const { __ } = useI18n()
  return (
    <div {...props}>
      <h1>{__('greeting')}</h1>
    </div>
  )
}

export default AppContainer

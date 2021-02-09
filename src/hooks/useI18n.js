import { useIntl } from 'react-intl'

const useI18n = () => {
  const intl = useIntl()

  const getMessage = (id, options = {}) => {
    const { description, defaultMessage, ...rest } = options
    return intl.formatMessage({ id, description, defaultMessage }, rest)
  }
  return { __: getMessage }
}

export default useI18n

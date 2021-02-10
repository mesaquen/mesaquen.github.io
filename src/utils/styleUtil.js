export const extractProp = (propName, attributeName) => (props) => {
  const value = props[propName]
  if (value !== undefined) {
    return `${attributeName}: ${value};`
  }

  return ''
}

export const prepareRules = (config = {}) => {
  const keys = Object.keys(config)
  return keys.map((key) => extractProp(key, config[key]))
}

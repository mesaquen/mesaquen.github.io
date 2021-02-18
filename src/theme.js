export default {
  sizes: {
    XL: '2.5rem',
    L: '1.25rem',
    M: '1rem',
    S: '0.75rem',
    XS: '0.5rem',
    XXS: '0.25rem',
  },

  media: {
    tablet: '768px',
    desktop: '900px'
  },

  sizing: (number = 1) => `${number}rem`,

  color: {
    primaryText: '#ccc',
    secondaryTextIcons: '#777',
    darkBackground: '#222',
    background: '#444',
    lightBackground: '#666',
    accent: 'turquoise',
    shadow: '#000A'
  },
  spacing: {
    default: '1rem',
    medium: '0.5rem',
    small: '0.25',
  },
}

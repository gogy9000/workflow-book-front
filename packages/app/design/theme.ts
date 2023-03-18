import { makeTheme } from 'dripsy'

const darkColors = {
  $background: 'black',
  $text: 'white',
}

const lightColors: typeof darkColors = {
  $text: 'black',
  $background: 'white',
}

const theme = makeTheme({
  colors: darkColors,
  space: {
    // recommended: set 0 first, then double for consistent nested spacing
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    h1: {
      fontSize: '$2', // 16px, from `fontSizes` above
    },
    p: {
      fontSize: '$0', // 12px from `fontSizes`
      mb: '$3', // 16px from `space`
    },
  },
})

const themeLight = {
  ...theme,
  colors: lightColors,
}

type MyTheme = typeof theme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme, themeLight }
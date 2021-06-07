import useDarkMode from 'hooks/useDarkMode'
//
const colorList = {
  dark: {
    primary: 'rgba(255,255,255,1)',
  },
  light: {
    primary: 'rgba(0,0,0,1)',
  },
}

export const colors = () => {
  const [theme] = useDarkMode()
  return colorList[theme]
}

export default {
  colors,
}

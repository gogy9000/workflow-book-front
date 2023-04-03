import { useEffect, useState } from 'react'
import  { useAnimatedStyle, withTiming } from 'react-native-reanimated'


type UsePulsarOpacityType = {
  isLoading?: boolean
  ms?: number
  opacity?: number
}
export const usePulsarOpacity = ({
                                   isLoading = false,
                                   ms = 1000,
                                   opacity = 0.1
                                 }: UsePulsarOpacityType) => {
  const [flash, setFlash] = useState(false)
  const [idInterval, setIdInterval] = useState<number>()

  const animatedBackground = useAnimatedStyle(
    () => ({
      opacity: withTiming(flash ? String(opacity) as unknown as number : String(1) as unknown as number)
    }),
    [flash]
  )

  const stopInterval = () => {
    clearInterval(idInterval)
  }

  useEffect(() => {
    if (isLoading) {
      let id = setInterval(() => {
        setFlash(prev => !prev)
      }, ms)
      setIdInterval(id as unknown as number)
    } else {
      stopInterval()
      setFlash(false)
    }
    return () => {
      stopInterval()
      setFlash(false)
    }
  }, [isLoading])

  return { animatedBackground }
}

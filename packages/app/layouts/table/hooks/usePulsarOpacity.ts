import { useEffect, useState } from 'react'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

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
	const [idInterval, setIdInterval] = useState<NodeJS.Timer>()

	const animatedBackground = useAnimatedStyle(
		() => ({
			opacity: withTiming(flash ? opacity : 1)
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
			setIdInterval(id)
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

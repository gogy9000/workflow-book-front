import {
  Feather,
} from '@expo/vector-icons'

export type TNavigationMenuItem={
  title:string
  link:string
  iconName: keyof typeof Feather.glyphMap
}
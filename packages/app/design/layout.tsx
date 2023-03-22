import { Row as RowNB,
  Box as BoxNB,
  Flex as FlexNB,
  HStack as H,
  VStack as V,
  Text as T,
  Pressable as P,
   Button as Butt,
  Center as Cent,
  Heading as Head,
  FormControl,
  Input as Inp,
  View as ViewNB,
  Factory
} from 'native-base'
import { SafeAreaView as SaveAreaW  } from 'react-native-safe-area-context'

import { styled } from 'nativewind'
import DropDownPicker from 'react-native-dropdown-picker'

export const SelectorPicker=Factory(DropDownPicker)

export const Row = styled(RowNB )
export const Box = styled(BoxNB )
export const Flex = styled(FlexNB )
export const HStack = styled(H )
export const VStack = styled(V )
export const Text = styled(T)
export const Pressable = styled(P)
export const Button = styled(Butt)
export const Center = styled(Cent)
export const Heading = styled(Head)
export const FControl = styled(FormControl)
export const Input = styled(Inp)
export const View=styled(ViewNB)
export const SafeAreaView=styled(Factory(SaveAreaW))




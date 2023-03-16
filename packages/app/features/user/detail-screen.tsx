// import { View, Text } from 'dripsy'

import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { styled, StyledProps } from 'nativewind'
// import { View, Text as T } from 'react-native'
const { useParam } = createParam<{ id: string }>()

// const Wie = styled(View)
// const Text = styled(T)
export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <></>
    // <View
    //   className={'flex-1 justify-center items-center'}
    //   // sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    // >
    //   <Text
    //     className={'text-gray-500'}
    //     // sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
    //   >{`User ID: ${id}`}</Text>
    // </View>
  )
}

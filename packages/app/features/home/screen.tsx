import {useSx} from 'dripsy'
import { View } from 'app/design/view'
import { H1 } from 'app/design/typography'


export function HomeScreen() {
  const sx = useSx()

  return (
    <View className={'flex-1 justify-center items-center'}>
      <H1 sx={{fontWeight:'800'}}  className={'text-red-500 '}>home</H1>
    </View>
  )
}
    // <View
    //   sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    // >
    //   <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
    //   <View sx={{ maxWidth: 600 }}>
    //     <P sx={{ textAlign: 'center' }}>
    //       Here is a basic starter to show you how you can navigate from one
    //       screen to another. This screen uses the same code on Next.js and React
    //       Native.
    //     </P>
    //     <P sx={{ textAlign: 'center' }}>
    //       Solito is made by{' '}
    //       <A
    //         href="https://twitter.com/fernandotherojo"
    //         // @ts-expect-error react-native-web only types
    //         hrefAttrs={{
    //           target: '_blank',
    //           rel: 'noreferrer',
    //         }}
    //         sx={{ color: 'blue' }}
    //       >
    //         Fernando Rojo
    //       </A>
    //       .
    //     </P>
    //   </View>
    //   <View sx={{ height: 32 }} />
    //   <Row>
    //     <TextLink
    //       href="/user/fernando"
    //       textProps={{
    //         style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
    //       }}
    //     >
    //       Regular Link
    //     </TextLink>
    //     <View sx={{ width: 32 }} />
    //     <MotiLink
    //       href="/user/fernando"
    //       animate={({ hovered, pressed }) => {
    //         'worklet'
    //
    //         return {
    //           scale: pressed ? 0.95 : hovered ? 1.1 : 1,
    //           rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
    //         }
    //       }}
    //       from={{
    //         scale: 0,
    //         rotateZ: '0deg',
    //       }}
    //       transition={{
    //         type: 'timing',
    //         duration: 150,
    //       }}
    //     >
    //       <Text
    //         selectable={false}
    //         sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
    //       >
    //         Moti Link
    //       </Text>
    //     </MotiLink>
    //   </Row>
    // </View>


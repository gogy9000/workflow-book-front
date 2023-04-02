import { IssuedTaskList } from 'app/features/task/issuedTasks/IssuedTaskList'
import { Box } from 'app/design/layout'
import { Layout } from 'app/layouts/Layout'
import React from 'react'
import { ReceivedTaskList } from 'app/features/task/receivedTasks/ReceivedTaskList'
import { OfficerTaskList } from 'app/features/task/officerTasks/OficcerTaskList'


export function HomeScreen() {

  return (
    <Layout isHasPadding>
      <Box className={'flex-1 bg-gray-100'}>
        <IssuedTaskList />
        <ReceivedTaskList />
        <OfficerTaskList />
      </Box>
    </Layout>

  )
}

// <MotiLink
//   href='/login'
//   animate={({ hovered, pressed }) => {
//     'worklet'
//     return {
//       scale: pressed ? 0.95 : hovered ? 1.1 : 1,
//       rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg'
//     }
//   }}
//   from={{
//     scale: 0,
//     rotateZ: '0deg'
//   }}
//   transition={{
//     type: 'timing',
//     duration: 150
//   }} style={undefined} onLayout={undefined}>
//   <H1 className={'text-red-500 '}>home</H1>
// </MotiLink>
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


import React from 'react';
//import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor:'#28425B' }}>
    {/* // <HelloWorldScreen />
        // <CounterScreen /> */}
    {/* <BoxObjectModelScreen /> */}
    {/* <DimensionsScreen/> */}
    {/* <PositionScreen/> */}
    <TareaScreen />
  </SafeAreaView>
)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlexBoxScreen } from '../screens/FlexBoxScreen';
import { ReduxTXScreen } from '../screens/ReduxTXScreen';
import { HelloScreen } from '../screens/HelloScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReduxTX">
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="ReduxTX" component={ReduxTXScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

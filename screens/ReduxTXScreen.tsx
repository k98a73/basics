import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from 'tailwind-rn';

export const ReduxTXScreen = () => {
  useEffect(() => {
    console.log('mounted ReduxTK');
    return () => {
      console.log('unmounted ReduxTK');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit</Text>
    </View>
  );
};

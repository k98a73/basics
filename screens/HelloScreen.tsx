import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from 'tailwind-rn';

export const HelloScreen = () => {
  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('unmounted Hello');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Hello</Text>
    </View>
  );
};

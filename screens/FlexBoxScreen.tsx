import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from 'tailwind-rn';

export const FlexBoxScreen = () => {
  useEffect(() => {
    console.log('mounted Flexbox');
    return () => {
      console.log('unmounted Flexbox');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>FlexBox</Text>
    </View>
  );
};

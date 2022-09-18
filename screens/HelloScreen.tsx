import { View, Text } from 'react-native';
import React, { useEffect, VFC } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';

import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: VFC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('unmounted Hello');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Hello</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate('ReduxTK')}
        />
      </View>
    </View>
  );
};

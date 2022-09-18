import { View, Text } from 'react-native';
import React, { useEffect, useState, VFC } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { RootStackParamList } from '../types/types';
import {
  addByPayload,
  decrement,
  increment,
  selectCounter,
} from '../slices/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;

export const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
  const [amount, setAmount] = useState('0');
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  const incrementAmount = Number(amount) || 0;

  useEffect(() => {
    console.log('mounted ReduxTK');
    return () => {
      console.log('unmounted ReduxTK');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit {count}</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
      </View>
      <View style={tw('my-1')}>
        <Button title="increment" onPress={() => dispatch(increment())} />
      </View>
      <View style={tw('my-1')}>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Input
        placeholder="type add number"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={amount}
        onChangeText={(txt: string) => setAmount(txt)}
      />
      <View style={tw('my-1')}>
        <Button
          title="increment by amount"
          onPress={() => {
            dispatch(addByPayload(incrementAmount));
            setAmount('0');
          }}
        />
      </View>
    </View>
  );
};

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>I am the home screen</Text>
      <Button title="go To Chat Screen" onPress={() => navigation.navigate('Chat')} />
    </View>
  )
}

export default HomeScreen;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import kanaDict from './constants/kana';
import { KanaProvider } from './context/KanaContext';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Stack = createStackNavigator();
export default function App(props) {
  const isLoadingComplete = useCachedResources();

  const [selectedKana, setSelectedKana] = useState(Object.keys(kanaDict));
  const toggleKana = (pressedKana) => {
    if (selectedKana.includes(pressedKana)) {
      console.log('loytyy!!', pressedKana);
      // setSelectedKana
      return true;
    }
    console.log('ei loyvy');
    return false;
  };

  console.log(selectedKana);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <KanaProvider value={{ selectedKana, toggleKana }}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </KanaProvider>
  );
}

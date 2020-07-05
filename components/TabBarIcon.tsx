import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import Colors from '../constants/Colors';

console.log('tuplasitaatit');

export default function TabBarIcon(props) {
  const { name, focused } = props;
  return (
    <Ionicons
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

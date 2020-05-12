import * as React from 'react';
import { Text } from 'react-native';
import { kana } from '../constants/kana.js';

export function KanaTable() {
  const table = kana;
  console.log(table);

  return (
    <Text>KanaTable</Text>
  );
}

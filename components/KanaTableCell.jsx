import * as React from 'react';
import { Text } from 'react-native';

export function KanaTableCell(props) {
  return (
    <Text>
      {props.char}
      {' ('}
      {props.row}
      {props.column}
      )
    </Text>
  );
}

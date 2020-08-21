import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { KanaType } from '../types/KanaType';

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'hsl(197, 73%, 60%)',
    borderRadius: 5,
    padding: 12,
    margin: 1,
    color: 'hsl(197, 73%, 30%)',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
});

const KanaTableCell: React.FC<KanaType> = ({
  romaji,
  row,
  column,
  hiragana,
  katakana,
}): React.ReactElement => {
  return <Text style={styles.cell}>{hiragana}</Text>;
};

export default KanaTableCell;

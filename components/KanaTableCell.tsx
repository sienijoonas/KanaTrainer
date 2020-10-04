import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

import KanaContext from '../context/KanaContext';
import { KanaType } from '../types/KanaType';

const styles = StyleSheet.create({
  cell: {
    padding: 16,
  },
  cellSelected: {
    color: 'hsl(40, 73%, 30%)',
  },
  titleStyle: {
    color: 'hsl(197, 73%, 30%)',
    fontSize: 48,
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
  // return <Text style={styles.cell}>{hiragana}</Text>;

  const { selectedKana, toggleKana } = useContext(KanaContext);

  console.log('toglgeKana', toggleKana);
  console.log('cell', selectedKana);

  const isSelected = () => {
    return selectedKana.includes(romaji);
  };

  return (
    <Button
      containerStyle={isSelected ? [styles.cell, styles.cellSelected] : styles.cell}
      title={hiragana}
      titleStyle={styles.titleStyle}
      onPress={() => {
        toggleKana(romaji);
      }}
    >
      {hiragana}
    </Button>
  );
};

export default KanaTableCell;

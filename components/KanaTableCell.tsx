import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

type Cell = {
  char: string;
  row: string;
  column: string;
};

const KanaTableCell: React.FC<Cell> = (props): React.ReactElement => {
  const { char, row, column } = props;
  return <Text style={styles.cell}>{`${char} (${row} ${column})`}</Text>;
};

const styles = StyleSheet.create({
  cell: {
    // display: 'inline-block',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
  },
});

export default KanaTableCell;

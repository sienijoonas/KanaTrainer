import React from 'react';
import { StyleSheet, View } from 'react-native';

import KanaTableCell from './KanaTableCell';

import { KanaType } from '../types/KanaType';

type Props = {
  row: KanaType[];
};

const styles = StyleSheet.create({
  row: {
    width: 256,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
  },
});

const KanaTableRow: React.FC<Props> = ({ row }): React.ReactElement => {
  const cells = row.map((cell: KanaType, index) => (
    <KanaTableCell
      romaji={cell.romaji}
      row={cell.row}
      column={cell.column}
      hiragana={cell.hiragana}
      katakana={cell.katakana}
      key={index.toString()}
    />
  ));

  return <View style={styles.row}>{cells}</View>;
};

export default KanaTableRow;

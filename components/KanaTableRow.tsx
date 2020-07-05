import React from 'react';
import { Text, View } from 'react-native';
import KanaTableCell from './KanaTableCell';

const KanaTableRow: React.FC = (props): React.ReactElement => {
  // props.rows.forEach((row, index) => {
  //   // <KanaTableCell char={row[index].key} row={row[index].value.row} column={row[index].value.column} key={index} />;
  //   console.log(`KanaTableRow: row: ${row}`);
  //   return (<Text>{row}</Text>);
  // });

  console.log(KanaTableCell);

  return <Text>KanaTableRow</Text>;
};

export default KanaTableRow;

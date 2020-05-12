import * as React from 'react';
import { Text } from 'react-native';
import { kana } from '../constants/kana';
import { KanaTableCell } from './KanaTableCell';

export default function KanaTable() {
  const table = kana;
  const rows = [];

  console.log(Object.entries(table)[0][0]);
  console.log(Object.entries(table)[0][1].row);
  console.log(Object.entries(table)[0][1].column);

  const cells = [];

  for (const [key, value] of Object.entries(table)) {
    // if (!rows.includes(value.row)) {
    //   rows.push(value.row);
    // }
    console.log(key);
    console.log(value.row);
    console.log(value.column);

    cells.push(<KanaTableCell char={key} row={value.row} column={value.column} key={key} />);
  }


  for (let i = 0; i < rows.length; i++) {
    // console.log(`row: ${rows[i]}`);
    cells.push(<KanaTableCell char={rows[i]} key={i} />);
  }

  // console.log(cells);

  return (
    cells
    // <Text>Aaaa</Text>
  );
}

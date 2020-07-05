/* eslint-disable no-console */

import * as React from 'react';
import KanaTableRow from './KanaTableRow';
import { kana } from '../constants/kana';

const KanaTable: React.FC = (): React.ReactElement => {
  const rows = [];
  let rowCells = [];

  let currentRow;

  for (const [key, value] of Object.entries(kana)) {
    console.log(`LOOP! key: ${key}, value.row: ${value.row}, value.column: ${value.column}`);

    if (currentRow !== undefined && currentRow !== value.row) {
      rows.push(rowCells);
      rowCells = [];
      console.log(`empty rowCells: ${rowCells}`);
      currentRow = [];
    }
    console.log('rows:', rows);

    const cell = {
      row: value.row,
      column: value.column,
      hiragana: value.hiragana.char,
      katakana: value.katakana.char,
    };

    console.log(cell);

    rowCells.push(cell);

    currentRow = value.row;
  }

  console.log(rows);

  return <KanaTableRow rows={rows} />;
};

export default KanaTable;

/* eslint-disable no-console */

import * as React from 'react';

import KanaTableRow from './KanaTableRow';

import kana from '../constants/kana';
import { KanaType } from '../types/KanaType';

const KanaTable: React.FC = (): React.ReactElement => {
  const rows = [];
  let rowCells = [];

  let currentRow;

  for (const [key, value] of Object.entries(kana)) {
    const cellKana: KanaType = {
      romaji: key,
      row: value.row,
      column: value.column,
      hiragana: value.hiragana.char,
      katakana: value.katakana.char,
    };
    // console.log(`${cellKana.romaji} ${cellKana.row}`);

    if (currentRow !== undefined && currentRow !== value.row) {
      // console.log(key, 'vaihtuu', currentRow, rowCells, 'TYONTO!');
      rows.push(rowCells);
      rowCells = [];
    }

    rowCells.push(cellKana);
    currentRow = value.row;
  }
  rows.push(rowCells);

  // console.log('rows');
  // console.log(rows);

  const tableRows = rows.map((row, index) => <KanaTableRow row={row} key={index.toString()} />);

  return <>{tableRows}</>;
};

export default KanaTable;

import React from 'react';

const KanaContext = React.createContext({
  selectedKana: ['a', 'i', 'u', 'e', 'o'],
  toggleKana: () => {},
});

export const KanaProvider = KanaContext.Provider;
export const KanaConsumer = KanaContext.Consumer;

export default KanaContext;

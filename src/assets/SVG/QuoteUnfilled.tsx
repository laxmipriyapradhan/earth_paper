import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function QuoteUnfilled() {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
      <Path
        d="M6.5 2.5l-3-2-3 2v15a3 3 0 003 3h14a3 3 0 003-3v-3h-2v-12l-3-2-3 2-3-2-3 2zm10 12h-12v3a1 1 0 11-2 0V3.57l1-.666 3 2 3-2 3 2 3-2 1 .666V14.5zm1 4H6.33c.11-.313.17-.65.17-1v-1h12v1a1 1 0 01-1 1z"
        fill="#C1D1FF"
      />
    </Svg>
  );
}

export default QuoteUnfilled;

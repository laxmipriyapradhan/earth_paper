import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function QuoteFilled() {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
      <Path
        d="M6.667 2.5l-3-2-3 2v15a3 3 0 003 3h14a3 3 0 003-3v-2h-16v2a1 1 0 11-2 0v-4h16v-11l-3-2-3 2-3-2-3 2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default QuoteFilled;

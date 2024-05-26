import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddQuote() {
  return (
    <Svg width={25} height={29} viewBox="0 0 30 29" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 0L8.5 2.833 12.75 0 17 2.833 21.25 0l4.25 2.833v2.834a7.083 7.083 0 00-4.25 12.75H2.832v5.666a1.417 1.417 0 102.834 0V21.25h22.666v2.833a4.25 4.25 0 01-4.25 4.25H4.25A4.25 4.25 0 010 24.083V2.833L4.25 0z"
        fill="#fff"
      />
      <Path
        d="M24.792 12.042V8.5h1.18v3.542h3.542v1.18h-3.542v3.542h-1.18v-3.542H21.25v-1.18h3.542z"
        fill="#fff"
      />
    </Svg>
  );
}

export default AddQuote;

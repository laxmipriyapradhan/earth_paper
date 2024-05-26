import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SettingsUnfilled() {
  return (
    <Svg width={22} height={23} viewBox="0 0 22 23" fill="none">
      <Path
        d="M7.686 3.5L10.293.893a1 1 0 011.414 0L14.314 3.5H18a1 1 0 011 1v3.686l2.607 2.607a1 1 0 010 1.414L19 14.814V18.5a1 1 0 01-1 1h-3.686l-2.607 2.607a1 1 0 01-1.414 0L7.686 19.5H4a1 1 0 01-1-1v-3.686L.393 12.207a1 1 0 010-1.414L3 8.186V4.5a1 1 0 011-1h3.686zM5 5.5v3.515L2.515 11.5 5 13.985V17.5h3.515L11 19.985l2.485-2.485H17v-3.515l2.485-2.485L17 9.015V5.5h-3.515L11 3.015 8.515 5.5H5zm6 10a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
        fill="#C1D1FF"
      />
    </Svg>
  );
}

export default SettingsUnfilled;

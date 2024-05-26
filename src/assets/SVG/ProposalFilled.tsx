import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProposalFilled() {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
      <Path
        d="M3.5 0v3h-3v2h3v3h2V5h3V3h-3V0h-2zm7 4a6 6 0 01-8 5.659v9.348c0 .548.447.993.998.993H13.5v-6c0-.55.45-1 1-1h6V2.998A.996.996 0 0019.507 2h-9.348a5.99 5.99 0 01.341 2zm10 11l-5 4.997V15h5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ProposalFilled;

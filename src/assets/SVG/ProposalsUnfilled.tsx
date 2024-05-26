import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProposalsUnfilled() {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
      <Path
        d="M3 .5v3H0v2h3v3h2v-3h3v-2H5v-3H3zM2 19.507V10.5h2v8h8v-5c0-.55.45-1 1-1l5-.001V4.5h-8v-2h9.007c.548 0 .993.456.993 1.002V14.5l-6 5.996-10.998.004A.998.998 0 012 19.507zm15.171-5.008L14 14.5v3.169l3.171-3.17z"
        fill="#C1D1FF"
      />
    </Svg>
  );
}

export default ProposalsUnfilled;

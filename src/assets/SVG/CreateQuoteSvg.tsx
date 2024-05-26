import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CreateQuoteSvg() {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      
    >
      <G filter="url(#filter0_d_298_4997)">
        <Rect x={12} y={2} width={56} height={56} rx={12} fill="#1F4CD0" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.5 15.833l4.25 2.834L40 15.833l4.25 2.834 4.25-2.834 4.25 2.834V21.5a7.083 7.083 0 00-4.25 12.75H30.082v5.667a1.417 1.417 0 102.834 0v-2.834h22.666v2.834a4.25 4.25 0 01-4.25 4.25H31.5a4.25 4.25 0 01-4.25-4.25v-21.25l4.25-2.834z"
          fill="#fff"
        />
        <Path
          d="M52.042 27.875v-3.542h1.18v3.542h3.542v1.18h-3.542v3.542h-1.18v-3.542H48.5v-1.18h3.542z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default CreateQuoteSvg

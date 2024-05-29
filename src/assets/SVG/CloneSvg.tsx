import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CloneSvg() {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
    
    >
      <Circle cx={18} cy={18} r={18} fill="#F4F5F7" />
      <Path
        d="M14.25 13.5v-2.25a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-2.25v2.25c0 .414-.338.75-.755.75h-8.99a.751.751 0 01-.755-.75l.002-10.5c0-.414.337-.75.755-.75h2.243zM12.752 15l-.002 9h7.5v-9h-7.498zm2.998-1.5h6V21h1.5v-9h-7.5v1.5z"
        fill="#1F4CD0"
      />
    </Svg>
  )
}

export default CloneSvg

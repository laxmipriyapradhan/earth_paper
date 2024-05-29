import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ShareSvg() {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      
    >
      <Circle cx={18} cy={18} r={18} fill="#F4F5F7" />
      <Path
        d="M15.75 11.25v1.5H12v10.5h12V16.5h1.5V24a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V12a.75.75 0 01.75-.75h4.5zm7.462 1.5L21 10.537l1.06-1.06 4.005 4.004a.45.45 0 01-.318.768H19.5a1.5 1.5 0 00-1.5 1.5v4.5h-1.5v-4.5a3 3 0 013-3h3.712z"
        fill="#1F4CD0"
      />
    </Svg>
  )
}

export default ShareSvg

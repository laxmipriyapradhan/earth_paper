import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function MoreSvg() {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      
    >
      <Circle cx={18} cy={18} r={18} fill="#F4F5F7" />
      <Path
        d="M12.75 16.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5zm10.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5zm-5.25 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"
        fill="#1F4CD0"
      />
    </Svg>
  )
}

export default MoreSvg

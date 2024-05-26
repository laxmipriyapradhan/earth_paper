import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowSvg() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"

    >
      <Path
        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ArrowSvg

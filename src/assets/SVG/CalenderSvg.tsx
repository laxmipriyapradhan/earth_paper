import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarSvg() {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      
    >
      <Path
        d="M6.755 1.675v1.5h4.5v-1.5h1.5v1.5h3a.75.75 0 01.75.75v12a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-12a.75.75 0 01.75-.75h3v-1.5h1.5zm8.25 7.5h-12v6h12v-6zm-6.75 1.5v3h-3.75v-3h3.75zm-3-6h-2.25v3h12v-3h-2.25v1.5h-1.5v-1.5h-4.5v1.5h-1.5v-1.5z"
        fill="#373738"
      />
    </Svg>
  )
}

export default CalendarSvg